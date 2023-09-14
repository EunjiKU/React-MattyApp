import * as types from "./type";

export const loginUserIdSet = (userId) => ({
  type: types.SET_USERID,
  payload: userId,
})
export const loginAccessTokenSet = (accessToken) => ({
  type: types.SET_USERID,
  payload: accessToken,
})
export const loginRefreshTokenSet = (refreshToken) => ({
  type: types.SET_USERID,
  payload: refreshToken,
})