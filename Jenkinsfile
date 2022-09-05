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
                ssh -i ~/.ssh/id_rsa jenkins@18.130.150.90 << EOF
                git clone https://github.com/HarryCope/QA-Cinema-OMD.git
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
                ssh -i ~/.ssh/id_rsa jenkins@18.130.150.90 << EOF
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
