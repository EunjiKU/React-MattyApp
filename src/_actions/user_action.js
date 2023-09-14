import axios from "axios";
import { LOGIN_USER, SET_USERID } from "./type";

const instance = axios.create({
  baseURL: `https://mattyapi.easymedia.co.kr/`
})

export function loginUserAction(userData) {
  const request = instance.post('api/Token', userData)
    .then(response => {
      console.log(response);
    
      return response.data
    })
    .catch(err => console.log("로그인 에러"))


  return {
    type: LOGIN_USER,
    payload: request
  }
}

export const loginUserIdSet = (userId) => ({
  type: SET_USERID,
  payload: userId,
})