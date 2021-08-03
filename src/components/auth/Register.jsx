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
    state: "",
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
        state: user.state,
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
    <div>
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input
          type="text"
          name="userName"
          value={user.userName}
          required
          onChange={handleChange}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <label>Password Again:</label>
        <input
          type="password"
          name="passwordAgain"
          value={user.passwordAgain}
          onChange={handleChange}
        />
        <br />
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={user.city}
          required
          onChange={handleChange}
        />
        <br />
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={user.state}
          required
          onChange={handleChange}
        />
        <br />
        <button type="submit">REGISTER USER</button>
      </form>

      {errorMsg && <ErrorMessages msg={errorMsg} />}
    </div>
  );
};

export default Register;
