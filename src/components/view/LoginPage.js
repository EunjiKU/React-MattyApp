import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import mattyLogo from '../../assets/images/img-matty-logo.png';
import { loginApi } from '../../api/index';
import { setCookie } from '../../utils/cookies';
import { loginUserIdSet, loginAccessTokenSet, loginRefreshTokenSet } from '../../_actions/user_action'

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, SetEmail] = useState("");
  const [Pwd, SetPwd] = useState("");

  const onEmailHanlder = (e) => {
    SetEmail(e.currentTarget.value);
  }
  const onPwdHanlder = (e) => {
    SetPwd(e.currentTarget.value);
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let loginData = {
      userid: Email,
      passwd: Pwd,
    }

    loginApi(loginData)
      .then(response => {
        console.log("로그인 성공");
        // ✅ 로그인 정보 store 저장
        dispatch(loginUserIdSet(loginData.userid));
        dispatch(loginAccessTokenSet(response.data.AccessToken));
        dispatch(loginRefreshTokenSet(response.data.RefreshToken));
        // ✅ 로그인 정보 cookie 저장
        setCookie("UserID", loginData.userid);
        setCookie("AccessToken", response.data.AccessToken);
        setCookie("RefreshToken", response.data.RefreshToken);
        // ✅ 메인 페이지 이동
        navigate('/main')
      })
      .catch(err => console.log("로그인 에러"));
  }

  return (
    <div className="login-page">
      <h2 className="logo"><img src={mattyLogo} alt="matty" /></h2>
      <form onSubmit={onSubmitHandler}>
        <div className="input-box">
          <label htmlFor="userEmail">이메일</label>
          <input id="userEmail" type="email" placeholder="이메일을 입력해주세요."
            value={Email} onChange={onEmailHanlder}
          />
        </div>
        <div className="input-box">
          <label htmlFor="userPwd">비밀번호</label>
          <input id ="userPwd" type="password" placeholder="비밀번호를 입력해주세요."
            value={Pwd} onChange={onPwdHanlder}
          />
        </div>
        <button type="submit" className="login-btn">로그인</button>
      </form>
      <p className="error">이메일을 입력해주세요.</p>
      <p className="error">비밀번호를 입력해주세요.</p>
      <p className="error">로그인에 실패하였습니다.<br/>이메일과 비밀번호를 확인해주세요.</p>
    </div>
  )
}

export default LoginPage;