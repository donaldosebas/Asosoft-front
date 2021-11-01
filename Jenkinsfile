pipeline {
    agent any
    tools {
        jdk 'Oracle JDK 14'
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