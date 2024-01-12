pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh '''
                #!/bin/bash
                cd /home/obio/obio/obio-ui
                npm install
                ''' 
            }
        }
    }
}