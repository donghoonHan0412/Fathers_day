# Fathers_day
하루 약과 혈압 당 측정


리액트 앱 만들어두던걸 넣으니까 인식하지 못한다..
git bash를 써도 마찬가지임

리액트 앱 생성 명령어
yarn creat react-app hello-react
	hello-react가 react-app의 인자로 들어감
	다른 이름으로 할 수 있는게 아니다.
	hello-react는 강제임
npm init react-app hello-react
	이건 가능했음, 이걸로 진행

react 앱 생성 중 에러
>>>
C:\Users\ehdgns\Documents\Fathers_day>yarn create react-app hello-react
yarn create v1.22.10
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Installed "create-react-app@5.0.1" with binaries:
      - create-react-app

Creating a new React app in C:\Users\ehdgns\Documents\Fathers_day\hello-react.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...

yarn add v1.22.10
info No lockfile found.
[1/4] Resolving packages...
warning react-scripts > @svgr/webpack > @svgr/plugin-svgo > svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
[2/4] Fetching packages...
error eslint@8.14.0: The engine "node" is incompatible with this module. Expected version "^12.22.0 || ^14.17.0 || >=16.0.0". Got "14.16.0"
error Found incompatible module.
info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.

Aborting installation.
  yarnpkg add --exact react react-dom react-scripts cra-template --cwd C:\Users\ehdgns\Documents\Fathers_day\hello-react has failed.

Deleting generated file... package.json
Deleting hello-react/ from C:\Users\ehdgns\Documents\Fathers_day
Done.
error Command failed.
Exit code: 1
Command: C:\Users\ehdgns\AppData\Local\Yarn\bin\create-react-app
Arguments: hello-react
Directory: C:\Users\ehdgns\Documents\Fathers_day
Output:

info Visit https://yarnpkg.com/en/docs/cli/create for documentation about this command.
<<<
이 내용은 yarn 버전이 맞지 않아 생긴 문제로 보임


npm init react-app hello-react
	이건 가능했음