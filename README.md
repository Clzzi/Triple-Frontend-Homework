## 트리플 프론트엔드 사전 과제

### 프로젝트 실행 방법

1. 현재 레포지토리(triple-frontend-homework)를 git clone 받는다.

```bash
$ git clone https://github.com/Clzzi/Triple-Frontend-Homework.git
```

2. 터미널에서 클론받은 프로젝트 경로로 들어와 `yarn` 또는 `npm i` 커맨드를 입력한다.

3. 프로젝트 실행에 필요한 의존성들이 모두 설치되었다면 `yarn start` 또는 `npm run start`를 입력한다.

### 사용한 기술과 선택한 이유

- **Emotion**: 일반적인 CSS로 스타일링하는것보다 Css in Js 라이브러리를 사용하여 스타일링하는 방식이 장점이 많기때문에 사용했습니다.

- **Webpack**: CRA(Create-React-App)방식으로 프로젝트를 만들어도 되지만 이번 사전과제처럼 규모가 크지 않은 프로젝트에선 CRA로 프로젝트를 만드는것은 비효율적이라고 판단하여, Webpack을 이용해 필요한 부분만 쉽게 번들링할 수 있도록 하였다.
