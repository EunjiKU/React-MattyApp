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
      .then(response => console.log(response))
      .catch(err => {console.log(err)})
  }

  return (
    <div className={classes["login-page"]}>
      <h2 className={classes.logo}><img src={mattyLogo} alt="matty" /></h2>
      <form onSubmit={onSubmitHandler}>
        <div className={classes["input-box"]}>
          <label>이메일</label>
          <input type="email" placeholder="이메일을 입력해주세요."
            value={Email} onChange={onEmailHanlder}
          />
        </div>
        <div className={classes["input-box"]}>
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호를 입력해주세요."
            value={Pwd} onChange={onPwdHanlder}
          />
        </div>
        <button type="submit" className={classes["login-btn"]}>로그인</button>
      </form>
    </div>
  )
}

export default LoginPage;