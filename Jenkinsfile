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
                echo $WORKSPACE
                cd $JENKINS_HOME/users/foo
                sh 'chmod +x gradlew'
                sh './gradlew app:assembleRelease'
            }
        }
    }
}