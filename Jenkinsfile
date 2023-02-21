pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.30.0-focal' } }
   stages {
      stage('e2e-tests') {
         steps {
            // Depends on your language / test framework
            sh 'npm install'
            sh 'npx playwright test'
         }
      }
   }
}