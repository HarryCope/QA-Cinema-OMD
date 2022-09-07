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












