# typescript

* 설치
  * npm install -g typescipt
* 컴파일
  * tsc hello.ts
  * 컴파일 된 파일 실행
    * node hello.js
* 버전 지정 컴파일
  * tsc hello.ts -t ES5
* 여러 파일 컴파일
  * tsc file1.ts file2.ts file3.ts
* 변경 감지
  * tsc hello.ts - watch
* tsconfig.json
  * 타입스크립트 프로젝트 컴파일 할 때 필요한 컴파일 설정 관리 파일
  * tsconfig.json 파일 생성
    * tsc -init
  * tsconfig.json 컴파일
    * tsc
* ts-node 모듈
  * ts-node hello.ts
    * tsc 명령어와 node 명령어를 한번에 실행
