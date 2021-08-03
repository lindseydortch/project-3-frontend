import React, { useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/group.svg";

function Header() {
  const { userData, setUserData } = useContext(UserContext);

  const logOut = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <div className="header">
      <Link className="logo-container" to="">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {userData.user ? (
          <div>
        <Link className="option" to="/events">
          EVENTS
        </Link>
        <Link className="option" to="/groups">
          GROUPS
        </Link>
            <Link className="option" to="/profile">
              PROFILE ({userData.user.userName})
            </Link>
            <Link className="option" onClick={logOut} to="/login">
              LOG OUT
            </Link>
          </div>
        ) : (
          <div>
            <Link className="option" to="/register">
              REGISTER
            </Link>
            <Link className="option" to="/login">
              LOGIN
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
