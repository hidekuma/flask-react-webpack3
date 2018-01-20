# Flask-React-Webpack3
Flask + React + Redux + React Router + Webpack3
1) React
2) React-Redux5
3) React-Router4
4) Webpack3
5) Python3
6) Flask
7) jinja2
8) HMR

# 어떤 사람들에게 필요한 프로젝트인가요?
1) 서버단 언어는 Flask다. (모델, API 등..)
2) Front는 React를 사용해야한다.
3) HMR(Hot Module Replacement)가 가능해야한다.
4) Front End Developers가 개발하기 용이한 환경이여야 한다.
5) Front 개발환경에서 Back단 Api호출이 가능해야한다.
6) Jinja2 템플릿도 사용할수 있어야한다.
7) 번들링 없이 특정 소스를 그대로 사용할 수 있어야한다.(외부 부트스트랩과 같은)

# 이 프로젝트는
상기 내용을 모두 충족하면서, 결과적으로 Deploy이 환경은 Python Flask에게 주되, React의 HMR이 적용되는 개발환경을 프론트에 제공할 수 있는 소스입니다.


# 1) 파이썬 패키지 설치
pip install -r requirements.txt

# 2) 노드 패키지 설치
cd static
npm install 또는 yarn

# 3) 백엔드 서버 기동 (python app.py 백그라운드로 실행)
cd static
./server.sh

# 4) 프런트엔드 개발서버 기동 (Webpack Dev Server)
yarn start

# 5) 디플로이 하기
yarn build

## xptmxm
