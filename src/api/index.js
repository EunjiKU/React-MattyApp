import axios from 'axios';

const instance = axios.create({
  baseURL: `https://mattyapi.easymedia.co.kr/`
})

// 로그인 API
function loginApi(userData) {
  return instance.post('api/Token', userData)
}

export {
  loginApi
}