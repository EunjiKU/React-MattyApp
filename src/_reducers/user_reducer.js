// import { LOGIN_USER, SET_USERID } from "../_actions/type";
import * as types from "../_actions/type";
import { getCookie } from '../utils/cookies';

// ✅ 초기 상태 정의
const initialState = {
  userId: getCookie("UserID") || '',
  accessToken: getCookie("AccessToken") || '',
  refreshToken: getCookie("RefreshToken") || '',
}

// eslint-disable-next-line import/no-anonymous-default-export
// export default function (state = {}, action) {
//   switch (action.type) {
//     case LOGIN_USER:
//       return { ...state, loginSuccess: action.payload };
//     case SET_USERID:
//       return { ...state,  }
//     default:
//       return state;
//   }
// }

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_USERID:
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