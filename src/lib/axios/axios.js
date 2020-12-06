import axios from 'axios';
// axios : 브라우저 , Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 lib
// ajax의 진화?

// axios 특징 
// 1. 운영환경에 따라 browser의 XMLHttpRequest 객체 또는 Node.js의 http api 사용
// 2. Promise(ES6) API 사용
// 3. 요청과 응잡 데이터의 변형
// 4. HTTP 요청 취소
// 5. HTTP 요청과 응답을 JSON형태로 자동 변환
// 6. 사이트간 요청 위조(XSRF) 보호를 위한 client side 지원 - Cross Origin 관련

// 참조 주소 https://xn--xy1bk56a.run/axios/guide/api.html#http-%EB%A9%94%EC%84%9C%EB%93%9C-%EB%B3%84%EC%B9%AD

// 기본적인 사용방법
// axios(url [, config]) 
// get

const axiosGet = axios.get('url',
    {// 이곳은 필요없을 경우 생략 가능
        params: {key:"value" }
    }).then((response)=> {
    // 응답성공
    console.log(response);
    }).catch((error) =>{
        // 응답실패
    }).then(()=>{
        //항상실행
    })

// 일반적으로 async와 await 를 같이 쓴다.
async function getUser(){
    try {
        const response = await axios.get('url');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

// post 요청
const axiosPost = axios.post('url',{
    param1: 'value',
    param2: "value"
    }
).then((response)=> {
    // 응답성공
    console.log(response);
}).catch((error) =>{
    // 응답실패
})

// multi 요청

function getUserAccount(){
    return axios.get('/url');
}

function getUserPermissions(){
    return axios.get('url');
}

function getMulti(){
    axios.all([getUserAccount(), getUserPermissions()]).then(
        // axios.spread 안에 위에서 쓴 함수의 return값을 가지고 작업하는 function 을 인자로 집어넣는다.
        axios.spread(function (acct, perms){ //acct, perms 는 위 두 function return 값이다.

        })
    )
}

// axios에 기본 값 주면서 instance 반환
    const Api = axios.create(
        
    );

export default Api;    