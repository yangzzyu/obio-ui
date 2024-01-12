pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh '''
                cd /home/obio/obio/obio-ui
                npm install
                ''' 
            }
        }
    }
}