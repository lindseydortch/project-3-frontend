import React, { useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
// import "./header.styles.scss";
// import { ReactComponent as Logo } from "../../assets/group.svg";

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
      <div className="logo">
        <Link className="logo-link" to="">
          We Back(ish)
        </Link>
      </div>
      <div className="navbar">
        {userData.user ? (
          <div className="navbar_list">
        <Link className="navbar_item" to="/events">
          EVENTS
        </Link>
        <Link className="navbar_item" to="/groups">
          GROUPS
        </Link>
            <Link className="navbar_item" to="/profile">
              PROFILE ({userData.user.userName})
            </Link>
            <Link className="navbar_item" onClick={logOut} to="/login">
              LOG OUT
            </Link>
          </div>
        ) : (
          <div className="navbar_list">
            <Link className="navbar_item" to="/register">
              REGISTER
            </Link>
            <Link className="navbar_item" to="/login">
              LOGIN
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
