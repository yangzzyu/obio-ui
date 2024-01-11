pipeline {
    agent {
        docker {
            image 'node:20.10.0-alpine3.19' 
            args '-p 5173:5173' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}