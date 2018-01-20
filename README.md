# Flask-React-Webpack3
Flask + React + Redux + React Router + Webpack3
1) React
2) React-Redux5
3) React-Router4
4) Webpack3
5) Webpack-Dev-Server
6) Python3
7) Flask
8) jinja2
9) HMR

# 어떤 사람들에게 필요한 프로젝트인가요?
보통 리액트를 사용하는 프로젝트일 경우 서버단은 node.js로 구현하는게 깔끔할겠지만, 파이썬에서 리액트 프런트를 구축해야 할 상황이 와서 해당 프로젝트를 만들게 되었습니다.

## 부여된 조건
1) 서버단 언어는 Python이여야한다.
2) Front는 React와 번들링이 되야 하며 HMR(Hot Module Replacement - 실시간반영)이 지원되어야한다.
3) Front 개발환경에서도 문제없이 Python Backend단 Api 등 소스호출이 가능해야한다.
4) Front 개발환경에서도 Jinja2 템플릿을 사용할수 있어야한다.
5) 특정 소스는 번들링 없이 그대로 연결 및 사용할 수 있어야한다.(ex> 외부 부트스트랩과 연결을 위해서) > 데브서버와 백엔드서버 경로 일치화

상기 내용을 모두 충족하면서, 결과적으로 디플로이 환경은 Python이 되고, Python 어플리케이션 파일을 실행했을때, Front-end Webpack Dev Server에서 보는 View가 모두 적용될 수 있게 만들었습니다. 특히나 React의 라우터와 리덕스 등이 문제없이 동작하며, 프런트 작업자들이 변경사항을 바로바로 확인할 수 있는 환경을 만드는데 초첨을 두었습니다.

# 사용해보기

## 1) 파이썬 패키지 설치
pip install -r requirements.txt

## 2) 노드 패키지 설치
cd static
npm install 또는 yarn

## 3) 백엔드 서버 기동 (python app.py 백그라운드로 실행)
cd static
./server.sh

## 4) 프런트엔드 개발서버 기동 (Webpack Dev Server)
yarn start

## 5) 디플로이 하기
yarn build


