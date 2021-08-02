import React, { useState } from "react";
import axios from "axios"

const Register = () => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((oldUser) => {
      return {
        ...oldUser,
        [name]: value,
      };
    });
  };

  let cleanSlate = {
    userName: "",
    password: "",
    passwordAgain: "",
    city: "",
    state: "",
  };
  const [user, setUser] = useState(cleanSlate);

  const handleSubmit = (e) => {
      e.preventDefault()

      const newUser ={
          userName: user.userName,
          password: user.password,
          city: user.city,
          state:user.state
      }
      console.log(newUser);

  }


  return (
    <div>
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit} >
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
    </div>
  );
};

export default Register;
