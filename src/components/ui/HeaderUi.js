import React from "react";
import mattyLogo from '../../assets/images/img-matty-logo.png';
import classes from './HeaderUi.module.css';

const HeaderUi = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}><img src={mattyLogo} alt="matty" /></h1>
    </header>
  )
}

export default HeaderUi;