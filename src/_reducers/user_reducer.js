// import { LOGIN_USER, SET_USERID } from "../_actions/type";
import { SET_USERID } from "../_actions/type";

import { getCookie } from '../utils/cookies';

// 초기 상태 정의
const initialState = {
  userId: getCookie("UserID") || '',
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
    case SET_USERID:
      return {
        ...state,
        userId: action.payload,
      }
    default:
      return state;
  }
}