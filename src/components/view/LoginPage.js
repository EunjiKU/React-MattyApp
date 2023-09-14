import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import axios from 'axios';
import classes from './LoginPage.module.css';
import mattyLogo from '../../assets/images/img-matty-logo.png';
import { loginApi } from '../../api/index';
import { setCookie } from '../../utils/cookies';

// import { loginUserAction } from '../../_actions/user_action'

const LoginPage = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, SetEmail] = useState("");
  const [Pwd, SetPwed] = useState("");

  const onEmailHanlder = (e) => {
    SetEmail(e.currentTarget.value);
  }
  const onPwdHanlder = (e) => {
    SetPwed(e.currentTarget.value);
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let loginData = {
      userid: Email,
      passwd: Pwd,
    }
    
    // dispatch(loginUserAction(loginData))
    //   .then(response => {
    //     console.log(response);
    //     if(response.payload.loginSuccess) {
    //       console.log("로그인 완료!");
    //     } else {
    //       console.log("로크인 틀림");
    //     }
    //   })
    //   .catch(err => console.log("로그인 에러 발생"))

    loginApi(loginData)
      .then(response => {
        console.log("로그인 성공");
        // 로그인 정보 cookie 저장
        setCookie("UserID", loginData.userid);
        setCookie("AccessToken", response.data.AccessToken);
        setCookie("RefreshToken", response.data.RefreshToken);
        // 메인 페이지 이동
        navigate('/main')
      })
      .catch(err => console.log("로그인 에러"));
  }

  return (
    <div className={classes["login-page"]}>
      <h2 className={classes.logo}><img src={mattyLogo} alt="matty" /></h2>
      <form onSubmit={onSubmitHandler}>
        <div className={classes["input-box"]}>
          <label htmlFor="userEmail">이메일</label>
          <input id="userEmail" type="email" placeholder="이메일을 입력해주세요."
            value={Email} onChange={onEmailHanlder}
          />
        </div>
        <div className={classes["input-box"]}>
          <label htmlFor="userPwd">비밀번호</label>
          <input id ="userPwd" type="password" placeholder="비밀번호를 입력해주세요."
            value={Pwd} onChange={onPwdHanlder}
          />
        </div>
        <button type="submit" className={classes["login-btn"]}>로그인</button>
      </form>
      <p className={classes.error}>이메일을 입력해주세요.</p>
      <p className={classes.error}>비밀번호를 입력해주세요.</p>
      <p className={classes.error}>로그인에 실패하였습니다.<br/>이메일과 비밀번호를 확인해주세요.</p>
    </div>
  )
}

export default LoginPage;