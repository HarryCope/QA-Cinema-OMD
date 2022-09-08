Create an EC2 Instance

Sign in to your AWS account, ensure that you are in the correct region (EU-west2)

Navigate to Instances and launch a new Instance.

Give your instance a name and select Ubuntu and Ubuntu Server 22.04
Select and instance type of t2 medium.
You will need to create a Key pair for you to login.  Once created save this file somewhere safe as you will need it.
Scroll to the bottom of the page leaving the rest untouched and click launch instance.

Yuo will need to to click into the instance and copy the ip address.
Open the commmand terminal and navigate to the directory where you saved the Key pair file.
Type the following to connect to the instance you have just created. ssh -i "your Key pari file" Ubtuntu @ "EC2 IP address"   
Then follow the on-screen commands and you will have succefully login into your EC2 instance.

You will then need to repeat this process to allow you to create a seperate instance for you to host your Jenkins.
To set-up your Jenkins you will need to do the following.
ssh into your new instance on a seperate terminal.

Save the following in a .sh file:

```
#!/bin/bash
if type apt > /dev/null; then
    pkg_mgr=apt
    java="openjdk-11-jre"
elif type yum /dev/null; then
    pkg_mgr=yum
    java="java"
fi
echo "updating and installing dependencies"
sudo ${pkg_mgr} update
sudo ${pkg_mgr} install -y ${java} wget git > /dev/null
echo "configuring jenkins user"
sudo useradd -m -s /bin/bash jenkins
echo "downloading latest jenkins WAR"
sudo su - jenkins -c "curl -L https://updates.jenkins-ci.org/latest/jenkins.war --output jenkins.war"
echo "setting up jenkins service"
sudo tee /etc/systemd/system/jenkins.service << EOF > /dev/null
[Unit]
Description=Jenkins Server
[Service]
User=jenkins
WorkingDirectory=/home/jenkins
ExecStart=/usr/bin/java -jar /home/jenkins/jenkins.war
[Install]
WantedBy=multi-user.target
EOF
sudo systemctl daemon-reload
sudo systemctl enable jenkins
sudo systemctl restart jenkins
sudo su - jenkins << EOF
until [ -f .jenkins/secrets/initialAdminPassword ]; do
    sleep 1
    echo "waiting for initial admin password"
done
until [[ -n "\$(cat  .jenkins/secrets/initialAdminPassword)" ]]; do
    sleep 1
    echo "waiting for initial admin password"
done
echo "initial admin password: \$(cat .jenkins/secrets/initialAdminPassword)"
EOF
```	
Give yourself executable permission

```
sudo chmod +x *.sh
```

Run the script

```
./<script_name_here>.sh
```

Wait for the initialAdminPassword to output

Save this AdminPassword in a seperate notepad file as it will be used later.
Once the installation is complete you will be asked for the the initial password, simply copy and paste this in.
You will then need to open your internet browser and go to localhost:8080 to Unlock Jenkins.
You will then be given the option to customise Jenkins, it is recommended to simply install withe the suggested plugins as this is all that will be required.
Upon the successful installation of Jenkins you will be prompted to create your first Admin user.
You can either fill in the form to have your details saved into the first admin account, or continue as admin.
On the Instance Configuration page, simply click Save and Finish.
Following this you should have successfully logged into the Jenkins dashboard.

Give jenkins sudo permission:

```
sudo visudo
```

```
jenkins  ALL=(ALL:ALL) NOPASSWD:ALL
```

Switch user into the newly created jenkins

```
sudo su jenkins
cd ~
```

Create a new ssh key in the location: ~/.ssh/jenkins_key

Leave the password blank

```
ssh-keygen
```

Print the public half of the key to the console:

```
cat ~/.ssh/jenkins_key.pub
```

Copy the public key that prints out

--------------------------------------------------------------------------------

Go back to the console ssh(ed) into app

It should still be using nano to view the authorized_keys file

Paste the public key from jenkins into the authorized_keys file

Save the file and exit

--------------------------------------------------------------------------------

Go back to the console ssh(ed) into jenkins

Try to ssh over to the app instance 

ssh -i "/home/jenkins/.ssh/jenkins_key" jenkins@<your_instance_IP>

Type yes to add the host to the list

Now Jenkins can ssh to our other instance

--------------------------------------------------------------------------------

Go back to `<jenkins-instance-IP>:8080`

Create a new build

Select pipeline build

Set up the pipeline to function using a fork of this repository https://github.com/HarryCope/QA-Cinema-OMD

Ensure your pipeline:

```
Is expecting a Github Webhook trigger (GitHub hook trigger for GITScm polling)
Is set up to pull the Jenkinsfile from SCM and is pointing at the 'main' branch (defaults to master)
```

Set up a github webHook on your forked repo to function with your main branch of the repository

Save the pipeline

--------------------------------------------------------------------------------

Clone the fork down to your local machine

Change the Jenkinsfile to:

```
pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'mvn clean test'
            }
        }
        stage('Build') {
            steps {
                sh '''
                ssh -i ~/.ssh/id_rsa jenkins@"Your IP for the app instance to ssh to the other machine" << EOF
                git clone "Your repository"
                cd QA-Cinema-OMD
                git checkout origin/dev
                git pull
                mvn clean install
                mkdir -p /home/jenkins/project-wars
                mv ./target/*.jar /home/jenkins/project-wars/project-${BUILD_NUMBER}.jar
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                build_num=${BUILD_NUMBER}
                ssh -i ~/.ssh/id_rsa jenkins@"Your IP for the app instance to ssh to the other machine" << EOF
                echo '[Unit]
Description=My SpringBoot App
[Service]
User=jenkins
Type=simple
ExecStart=/usr/bin/java -jar /home/jenkins/project-wars/project-'$build_num'.jar
[Install]
WantedBy=multi-user.target' > /home/jenkins/TheApp.service
                sudo mv /home/jenkins/TheApp.service /etc/systemd/system/TheApp.service
                sudo systemctl daemon-reload
                sudo systemctl restart TheApp
                '''
            }
        }
    }
}
```

Push the changes up to github


Note: This is secure because our database is not open to public accessiblility,
and our SSH keys used during the pipeline only exist on the instances, the key names used to connect to the instances remain secure.


--------------------------------------------------------------------------------

Go back to `<jenkins-instance-IP>:8080`

Your build should be triggered by the GitHub Webhook

You can click on the boxes to see the output of the stages

When it finishes the app will be on port 8080 on the app instances public IP
	
You can make changes to the Jenkinsfile to change the pipeline












