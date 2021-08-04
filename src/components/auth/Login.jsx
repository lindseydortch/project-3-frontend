import React, { useState, useContext } from "react";
import {UserContext} from "../../App"
import ErrorMessages from "../resources/ErrorMessages";
import axios from "axios"

function Login() {
  const { userData, setUserData} = useContext(UserContext)
  const [errorMsg, setErrorMsg] = useState();      


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
    password: ""
  };
  const [user, setUser] = useState(cleanSlate);

  const handleSubmit = async (e) => {
      e.preventDefault()

      try{
        
        const newUser ={
            userName: user.userName,
            password: user.password,
        }
        // checking password for login
        console.log("userData: ", userData)
        console.log("newUser data: ", newUser)

        const loginResponse = await axios.post('/login', newUser)
        console.log(loginResponse.data)
        setUserData({
          token: loginResponse.data.token,
          user: loginResponse.data.user,
        });
        localStorage.setItem("auth-token",loginResponse.data.token)
        
        setUser({
          userName:'',
          password:'',
        })
        window.location ='/events'
      }catch (err) {
        console.log(err)
        err.response.data.msg
          ? setErrorMsg(err.response.data.msg)
          : setErrorMsg("We have a User Login error!");
      }
  }


  return (
    <section className="loginPage">
      <div className="login_form">

      
      <h3>Login Here</h3>
      <form onSubmit={handleSubmit} className="form formLogin">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="userName"
            value={user.userName}
            required
            onChange={handleChange} placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btnMistyRose u-margin-top-25">LOGIN</button>
        </div>
      </form>
      
      {errorMsg && <ErrorMessages msg={errorMsg} />}
      </div>
      <div className="login__image">
        &nbsp;
      </div>
    </section>
  )
}

export default Login
