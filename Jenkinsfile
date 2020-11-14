podTemplate(yaml: """
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: node
    image: node:14-alpine3.12
    command: ['cat']
    tty: true
  - name: gradle
    image: gradle:6.7-jdk8
    command: ['cat']
    tty: true
  - name: kaniko
    # simulate kaniko build
    image: alpine/helm
    command: ['cat']
    tty: true
"""
  ) {
        ​
    node {​
        git 'https://github.com/stainboy/perf-ci.git'

        stage 'react' {​
            container('node') {​
                sh 'cd webapp && yarn install​'​
                sh 'cd webapp && yarn build​'​
            }​
        }​
        stage 'spring​' {​
            container('gradle​') {​
                sh 'cp -r webapp/build/* src/main/resources/static/​​'​
                sh 'gradle build​​'​
            }​
        }​
        stage 'docker​' {​
            container('kaniko​') {​
                // simulate kaniko build
                sh 'echo "kaniko build ..."'​
                sh 'sleep 15s'​
            }​
        }​
    }​

}