pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh '''
                npm install
                // npm run test:unit
                npm run build
                cp -R ./dist/* /var/www/html
                ''' 
            }
        }
    }
}