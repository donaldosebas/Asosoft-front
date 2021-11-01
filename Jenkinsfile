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
                sh 'chmod +x android/gradlew'
                sh 'keytool -genkeypair -v -storetype PKCS12 -keystore asosoft.keystore -alias asosoft -keyalg RSA -keysize 2048 -validity 10000 && asosoft123 && asosoft123'
                sh 'android/gradlew tasks'
                sh 'android/gradlew clean'
                sh 'android/gradlew assembleRelease'
            }
        }
    }
}