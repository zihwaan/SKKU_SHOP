# SKKU SHOP - 전자상거래 웹사이트

성균관대학교 Web Programing Lab 과제

## 개요

SKKU SHOP은 바시티 재킷, 패딩 코트, 티셔츠와 같은 다양한 의류 품목을展示하고 판매하기 위해 설계된 간단한 전자상거래 웹사이트입니다. 이 웹사이트는 반응형 디자인, 제품 카탈로그, 그리고 데이터베이스 기능을 위한 Firebase Firestore 통합을 특징으로 합니다. 이 프로젝트는 2022년 변지환에 의해 만들어졌으며, 현대적인 CSS와 Boxicons 아이콘으로 스타일링되었습니다.

## 기능

- **반응형 내비게이션**: 홈, 바시티 재킷, 패딩 코트, 티셔츠, 모든 제품 섹션에 쉽게 접근할 수 있는 토글 가능한 내비게이션 메뉴.
- **제품 섹션**: 바시티 재킷, 패딩 코트, 티셔츠 등의 카테고리에 가격과 "장바구니에 추가" 기능이 포함된 품목 표시.
- **Firebase 통합**: 장바구니 또는 사용자 데이터 관리를 위해 Firebase Firestore 사용 (`database.js`에서 구현 필요).
- **뉴스레터 가입**: 이메일을 제출하여 10% 할인 이벤에 참여 가능.
- **푸터**: 탐색 섹션과 지원 옵션 링크, 저작권 정보 포함.

## 프로젝트 구조

```
SKKU-SHOP/
├── assets/
│   ├── css/
│   │   └── styles.css        # 웹사이트 스타일시트
│   ├── js/
│   │   ├── database.js      # Firebase Firestore 통합 스크립트
│   │   └── main.js          # 주요 JavaScript 기능 (예: 내비게이션 토글, 장바구니 로직)
│   └── img/
│       ├── imghome.png      # 홈 섹션 이미지
│       ├── varsity_jacket1.png # 바시티 재킷 제품 이미지
│       ├── varsity_jacket2.png
│       ├── varsity_jacket3.png
│       ├── Varity_jacket1.png # 컬렉션 이미지 (파일명 오타 주의)
│       ├── Varity_jacket2.png
│       ├── Padded_coat1.png  # 패딩 코트 제품 이미지
│       ├── Padded_coat2.png
│       ├── Padded_coat3.png
│       ├── Padded_coat4.png
│       ├── Tshirt1.png       # 티셔츠 제품 이미지
│       ├── Tshirt2.png
│       ├── Tshirt3.png
│       ├── Tshirt4.png
│       ├── Tshirt5.png
│       └── logo.png         # SKKU SHOP 로고 (오퍼 섹션용)
├── index.html               # 메인 HTML 파일
├── All_Products.html        # 모든 제품 페이지 (제공되지 않음)
├── buy.html                # 장바구니/결제 페이지 (제공되지 않음)
└── README.md               # 이 파일
```

## 사전 요구 사항

- 최신 웹 브라우저 (예: Chrome, Firefox, Edge).
- 수정용 텍스트 편집기 (예: VS Code).
- (선택) Firestore 기능 사용을 위한 Firebase 계정.

## 설치 방법

1. **리포지토리 복제 또는 다운로드**:
   - 프로젝트 파일을 다운로드하거나 리포지토리를 로컬 머신에 복제하세요.

2. **Firebase 설정**:
   - [Firebase 콘솔](https://console.firebase.google.com/)에서 Firebase 프로젝트를 생성하세요.
   - 웹 앱을 프로젝트에 추가하고 Firebase 구성 객체를 복사하세요.
   - `assets/js/database.js` 파일에 Firebase 구성을 업데이트하세요:
     ```javascript
     const firebaseConfig = {
       apiKey: "당신의-api-key",
       authDomain: "당신의-auth-domain",
       projectId: "당신의-project-id",
       storageBucket: "당신의-storage-bucket",
       messagingSenderId: "당신의-messaging-sender-id",
       appId: "당신의-app-id"
     };
     firebase.initializeApp(firebaseConfig);
     const db = firebase.firestore();
     ```

3. **프로젝트 실행**:
   - `index.html`을 웹 브라우저에서 열어 로컬에서 웹사이트를 확인하세요.
   - 또는 로컬 서버(예: VS Code의 Live Server 확장 또는 `python -m http.server`)를 사용하여 테스트하세요.

## 사용 방법

- 헤더 메뉴를 통해 섹션을 탐색하세요.
- "장바구니에 추가" 버튼을 클릭하여 장바구니에 항목 추가를 시뮬레이션하세요 (`database.js` 또는 `main.js`에서 구현 필요).
- 뉴스레터 섹션에서 이메일을 입력하고 "참여"를 클릭하여 이벤트 참여를 시뮬레이션하세요 (`join_event()` 구현 필요).
- 링크된 페이지(`All_Products.html`, `buy.html`)가 있다면 탐색해보세요.

## 의존성

- **Firebase**: 앱 및 Firestore 기능에 사용되는 버전 8.10.1.
- **Boxicons**: 아이콘에 사용되는 버전 2.0.5 (CDN을 통해 로드).
