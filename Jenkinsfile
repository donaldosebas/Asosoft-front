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
<<<<<<< HEAD
                echo 'deploying the project'
=======
                sh 'java -version'
                echo 'building project...'
                cd $JENKINS_HOME/android/
                sh 'chmod +x gradlew'
                sh './gradlew app:assembleRelease'
>>>>>>> 9c12718 (Update Jenkinsfile)
            }
        }
    }
}
