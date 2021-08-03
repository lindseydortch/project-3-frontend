import React from "react";
import {Link} from 'react-router-dom'
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/group.svg";

function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/events">
          EVENTS
        </Link>
        <Link className="option" to="/groups">
          GROUPS
        </Link>
        <Link className="option" to="/login">
          LOGIN
        </Link>
        <Link className="option" to="/register">
          REGISTER
        </Link>
        <Link className="option" to="/profile">
          PROFILE
        </Link>
      </div>
    </div>
  );
}

export default Header;
