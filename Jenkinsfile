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
                cd $JENKINS_HOME/android/
                sh 'chmod +x gradlew'
                sh './gradlew app:assembleRelease'
            }
        }
    }
}