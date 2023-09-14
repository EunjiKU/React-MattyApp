import * as types from "../_actions/type";
import { getCookie } from '../utils/cookies';

// ✅ 초기 상태 정의
const initialState = {
  userId: getCookie("UserID") || '',
  accessToken: getCookie("AccessToken") || '',
  refreshToken: getCookie("RefreshToken") || '',
  userImgUrl: process.env.REACT_APP_USER_IMG_URL,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_USERID:
      console.log("우웅");
      console.log(initialState.userImgUrl);
      return {
        ...state,
        userId: action.payload,
      }
    case types.SET_ACCESSTOKEN:
      return {
        ...state,
        accessToken: action.payload,
      }
    case types.SET_RERESHTOKEN:
      return {
        ...state,
        refreshToken: action.payload,
      }
    default:
      return state;
  }
}