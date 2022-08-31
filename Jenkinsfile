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
                ssh -i ~/.ssh/id_rsa jenkins@13.40.31.150 << EOF
                git clone https://github.com/HarryCope/QA-Cinema-OMD.git
                cd QA-Cinema-OMD
                git checkout development
                git pull
                mvn clean install
                mkdir -p /home/jenkins/project-wars
                mv ./target/*.war /home/jenkins/project-wars/project-${BUILD_NUMBER}.war
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                build_num=${BUILD_NUMBER}
                ssh -i ~/.ssh/id_rsa jenkins@13.40.31.150 << EOF
                echo '[Unit]
Description=My SpringBoot App
[Service]
User=jenkins
Type=simple
ExecStart=/usr/bin/java -jar /home/jenkins/project-wars/project-'$build_num'.war
[Install]
WantedBy=multi-user.target' > /home/jenkins/MyApp.service
                sudo mv /home/jenkins/MyApp.service /etc/systemd/system/MyApp.service
                sudo systemctl daemon-reload
                sudo systemctl restart MyApp
                '''
            }
        }
    }
}
