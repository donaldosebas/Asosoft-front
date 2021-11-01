pipeline {
    agent any
    tools {
        jdk 'jdk-14'
    }
    stages {
        stage("build project") {
            steps {
                sh 'java -version'
                echo 'building project...'
                sh 'npm install'
                sh 'ls ./android'
                sh 'chmod +x android/gradlew'
                sh 'android/gradlew tasks'
                sh 'android/gradlew clean'
                sh 'android/gradlew assembleRelease'
            }
        }
    }
}