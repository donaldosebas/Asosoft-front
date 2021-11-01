pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Lint') {
            steps {
                echo 'Project linter'
                sh 'npm install'
                sh 'npm run lint'
            }
        }
        stage('Test') {
            steps {
                echo 'testing the project'
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'deploying the project'
            }
        }
    }
}
