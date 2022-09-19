pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/shelb-doc/MyPersonSite', branch: 'main')
      }
    }

    stage('shell') {
      steps {
        sh 'ls -la'
      }
    }

  }
}