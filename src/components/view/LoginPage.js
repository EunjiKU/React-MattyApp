import React, { useState } from "react";
import axios from 'axios';
import classes from './LoginPage.module.css';
import mattyLogo from '../../assets/images/img-matty-logo.png';

const LoginPage = () => {
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

    let loginValue = {
      userid: Email,
      passwd: Pwd,
    }
    
    console.log(loginValue);
    
    axios.post('https://mattyapi.easymedia.co.kr/api/Token', loginValue)
      .then(response => console.log("로그인 성공"))
      .catch(err => {console.log("로그인 에러")})
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