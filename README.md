# 솔라커넥트 FE Assignment - Todo-List

---

### 🏕 배포 주소

- 아래 URL을 클릭하면 배포된 페이지로 이동합니다. <br>
  https://

---

### 💡 설치 및 시작
- clone 후 직접 실행을 원하시는 경우 아래 명령어로 실행하시기 바랍니다.
```js
//1. 설치
npm

//2. 시작
npm start
```

---

### 🧑‍💻 참여 멤버

|  이름  |                  역할                   |
| :----: | :-------------------------------------: |
| 김종원 |  Todo-List 수정  |

---

### 📋 컴포넌트 설계도

<a href="https://codesandbox.io/s/long-haze-9v8jt?file=/src/components/todo/template/create/TodoCreate.tsx:0-2267" target="_blank">CLICK</a>으로 보러가기

---

### 🗂 폴더 구조

![image](https://user-images.githubusercontent.com/65105537/129830505-eab9ee1a-8fbd-4fa3-8a3f-b1bf94f0f970.png)

- `public`: endpoint 역할을 수행하는 index.html 파일이 저장됩니다.<br>
- `src`: 애플리케이션 실행에 필요한 모든 소스코드가 저장됩니다.<br>
- `components`: 애플리케이션에 사용된 모든 컴포넌트들이 하위에 저장됩니다.<br>
    - &nbsp;&nbsp;&nbsp;`header`: 페이지 헤더의 구성요소에 해당하는 컴포넌트가 저장됩니다.<br>
    - &nbsp;&nbsp;&nbsp;`body`: 페이지 바디의 구성요소에 해당하는 컴포넌트들이 저장됩니다.<br>
    - &nbsp;&nbsp;&nbsp;`common`: 재사용이 되거나 공통적으로 쓰이는 컴포넌트가 저장됩니다.<br>
    - &nbsp;&nbsp;&nbsp;`pages`: 하나의 페이지가 되는 컴포넌트가 저장됩니다. <br>
- `icons`: 사용되는 모든 아이콘(확장자: svg)파일이 저장됩니다.<br>
- `style`: 전역 스타일 적용으로 위한 reset.js 파일이 저장됩니다.<br>
- `util`: 재사용되는 함수들이 파일 단위로 저장됩니다.<br>
    - &nbsp;&nbsp;&nbsp;`context`: 전역상태 관리를 위해 요구되는 context.js 와 sortReducer.js 파일이 저장됩니다.<br>
    - &nbsp;&nbsp;&nbsp;`hooks`: 커스텀 훅을 구현한 파일이 저장됩니다.<br>

---

### 📝 구현목록

#### 타이머

- [x] 1, 6의 타이머 컴포넌트 재사용
- [x] [1. 타이머]는 “ko-KR” 지역시간 표기법으로 나타내기
- [x] [6. 타이머]는 “en-US” 지역시간 표기법으로 나타내기
- [x] 한국 표준시를 기준으로 나타내기

#### 입력

- [x] 사용자의 입력 데이터 받기
- [x] 잘못된 형식의 입력 데이터 예외처리하기

#### 시작

- [x] 사용자가 버튼을 누르는 순간 소팅이 시작되게 하기
- [x] [4. 결과 필드]에 바로 노출 되고 3초 후에 [5. 결과 필드]에 결과가 노출 되게 하기

#### 결과

- [x] 결과 데이터의 형식은 “숫자, 숫자, 숫자…” 로 만들기
- [x] [4. 결과 필드]에서는 오름차순 결과를 나타내기
- [x] [5. 결과 필드]에서는 내림차순 결과를 나타내기
- [x] 알고리즘은 소팅알고리즘을 사용하지 않고, 정렬 방법으로 직접 구현하기

#### 기타

- [x] React.JS로 구현하기
- [x] 기획서 참고하여 레이아웃 짜고 UI 구현하기
- [x] Context API 및 Reducer함수 이용해 전역상태 관리하기

#### 참고한 레퍼런스

- 리액트를 다루는 기술 (저자 : 김민준)
