import axios from 'axios';
import store from '../store/index'

// ✅ 올해 1월1일, 이번달 시작일, 이번달 마지막일 구하기
let date = new Date();
let year = date.getFullYear(); // 이번년도
let month = date.getMonth() + 1; // 이번달 월
let firstDay = new Date(year, month, 1).getDate(); // 이번달 첫째날
let lastDay = new Date(year, month, 0).getDate(); // 이번달 마지막날

if(firstDay < 10) {
  firstDay = `0${firstDay}`;
}

let nowMonthFirst = `${year}-${month}-${firstDay}`;
let nowMonthLast = `${year}-${month}-${lastDay}`;

console.log(firstDay);
console.log(lastDay);


const instance = axios.create({
  baseURL: `https://mattyapi.easymedia.co.kr/`
})

instance.interceptors.request.use(function (config) {
  // ✅ 요청보내기 전 코드
  config.headers.token = store.getState().user.accessToken;
  return config;
}, function (error) {
  // ✅ 요청에러 처리
  return Promise.reject(error);
},
);

// ✅ 로그인 API
function loginApi(userData) {
  return instance.post('api/Token', userData)
}

// ✅ 기념일 - 이지데이 API
function ezDayApi() {
  return instance.get('api/User', {
    params: {
      stype: "easyday",
      startdate: nowMonthFirst,
      enddate: nowMonthLast
    }
  })
}

// ✅ 이지스토리 API
function ezStoryApi() {
  return instance.get('api/EasyStory')
}

export {
  loginApi,
  ezStoryApi,
  ezDayApi
}