import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import store from '../store/index'

console.log("하하하하하");

console.log(store.getState().user.userId);

const instance = axios.create({
  baseURL: `https://mattyapi.easymedia.co.kr/`
})

instance.interceptors.request.use(function (config) {
  // 요청보내기 전 코드
  config.headers.token = store.getState().user.accessToken;
  return config;
}, function (error) {
  // 요청에러 처리
  return Promise.reject(error);
},
);


// 로그인 API
function loginApi(userData) {
  return instance.post('api/Token', userData)
}

// 이지스토리 API
function ezStoryApi() {
  return instance.get('api/EasyStory')
}


export {
  loginApi,
  ezStoryApi
}