pipeline {
    agent any
    tools {
        jdk 'jdk-14'
        nodejs 'node'
    }
    stages {
        stage("build project") {
            steps {
                sh 'java -version'
                echo 'building project...'
                sh 'npm install'
                sh 'ls ./android'
                sh 'chmod +x android/gradlew'
                sh 'android/gradlew tasks --all'
                sh 'android/gradlew assemble'
            }
        }
    }
}