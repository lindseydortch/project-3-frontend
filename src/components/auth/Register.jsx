import React, { useState, useContext } from "react";
import { UserContext } from "../../App";
import ErrorMessages from "../resources/ErrorMessages";
import axios from "axios";

const Register = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState();

  let cleanSlate = {
    userName: "",
    password: "",
    passwordAgain: "",
    city: "",
    interact:""
  };
  const [user, setUser] = useState(cleanSlate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((oldUser) => {
      return {
        ...oldUser,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        userName: user.userName,
        password: user.password,
        city: user.city,
        interact: user.interact
      };
      console.log(newUser);

      if (user.password !== user.passwordAgain) {
        console.log("Enter the same password twice!");
      } else {
        console.log(newUser);
      }
      await axios
        .post("http://localhost:4000/register", newUser)
        .then((res) => console.log(res.data))
        .then(console.log(newUser.userName + " has been added"));

      const loginResponse = await axios.post("/login", newUser);
      console.log(loginResponse.data);

      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      });
      localStorage.setItem("auth-token", loginResponse.data.token);

      setUser({
        userName: "",
        password: "",
      });

      window.location = "/";
    } catch (err) {
      console.log(err);
      err.response.data.msg
        ? setErrorMsg(err.response.data.msg)
        : setErrorMsg("Dude Where's My Car!");
    }
  };

  return (
    <section className="register">
      <div className="register_image">
        &nbsp;
      </div>
      <div className="register_form">

      
      <h3>Register Below</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="userName"
            value={user.userName}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          name="passwordAgain"
          value={user.passwordAgain}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="City">City, State:</label>
        <select type="text" id="city" name='city' onChange={handleChange} value={user.city}>
          <option></option>
          <option value="chicago">Chicago, IL</option>
          <option value="dallas">Dallas, TX</option>
          <option value="kansascity">Kansas City, MO</option>
          <option value="orlando">Orlando, FL</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="intereact">Select your perfered way to interect with people:</label>
        <select type="text" id="interact" name='interact' onChange={handleChange} value={user.interact}>
          <option placeholder="Choose an Option"></option>
          <option value="online">Online</option>
          <option value="hybrid">Online &amp; In Person</option>
          <option value="inPerson">In Person</option>
        </select>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btnMistyRose u-margin-top-25">REGISTER USER</button>
      </div>
      </form>

      {errorMsg && <ErrorMessages msg={errorMsg} />}
      </div>
    </section>
  );
};

export default Register;
