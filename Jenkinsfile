pipeline {
    agent any

    stages {
        stage('Lint') {
            steps {
                echo 'Project linter'
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
