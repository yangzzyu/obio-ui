pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh '''
                npm install
                npm run build
                rm -rf /var/www/html/assets
                cp -R ./dist/* /var/www/html
                ''' 
            }
        }
    }
}