import React from "react";
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBook, faAddressBook, faLock } from "@fortawesome/free-solid-svg-icons";
import classes from './NavUi.module.css';

const HeaderUi = () => {
  return (
    <nav className={classes.nav}>
      <NavLink
        to="/main"
        className={({ isActive }) => isActive ? `${classes.active} ${classes.menu}` : classes.menu}
      >
        <FontAwesomeIcon icon={faHouse} />
        <span>홈</span>
      </NavLink>
      <NavLink
        to="/book"
        className={({ isActive }) => isActive ? `${classes.active} ${classes.menu}` : classes.menu}
      >
        <FontAwesomeIcon icon={faBook} />
        <span>도서</span>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => isActive ? `${classes.active} ${classes.menu}` : classes.menu}
      >
        <FontAwesomeIcon icon={faAddressBook} />
        <span>연락처</span>
      </NavLink>
      <NavLink
        to="/my"
        className={({ isActive }) => isActive ? `${classes.active} ${classes.menu}` : classes.menu}
      >
      <FontAwesomeIcon icon={faLock} />
        <span>My계정</span>
      </NavLink>
    </nav>
  )
}

export default HeaderUi;