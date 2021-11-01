pipeline {
    agent any
    tools {
        jdk 'jdk-14'
        maven 'Maven-3-6-3'
    }
    stages {
        stage("build project") {
            steps {
                sh 'java -version'
                echo 'building project...'
                sh 'cd android'
                sh 'chmod +x gradlew'
                sh './gradlew app:assembleRelease'
            }
        }
    }
}