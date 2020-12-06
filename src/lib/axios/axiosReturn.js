// axios 요청에 따른 response의 내부 목록
// {
//     // `data`는 서버가 제공한 응답(데이터)입니다.
//     data: {},
  
//     // `status`는 서버 응답의 HTTP 상태 코드입니다.
//     status: 200,
  
//     // `statusText`는 서버 응답으로 부터의 HTTP 상태 메시지입니다.
//     statusText: 'OK',
  
//     // `headers` 서버가 응답 한 헤더는 모든 헤더 이름이 소문자로 제공됩니다.
//     headers: {},
  
//     // `config`는 요청에 대해 `axios`에 설정된 구성(config)입니다.
//     config: {},
  
//     // `request`는 응답을 생성한 요청입니다.
//     // 브라우저: XMLHttpRequest 인스턴스
//     // Node.js: ClientRequest 인스턴스(리디렉션)
//     request: {}
//   }

// 주의사항 axios 사용시 cors를 위해서 react-cors 패키지를 설치하고 적용해야 한다.