pipeline {
  agent {
    dockerfile true
  }
  stages {
    stage('Prep') {
      steps {
        sh 'yarn add jest'
      }
    }
    stage('Test') {
      steps {
        sh 'yarn run test'
      }
    }
  }
}
