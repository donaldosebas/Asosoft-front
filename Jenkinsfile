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
                sh 'ls'
                sh "ls ./android"
                sh "./android/gradlew clean assembleRelease"
            }
        }
    }
}