import React, { useState, useContext } from "react";
import {UserContext} from "../../App"
import axios from "axios"

function Login() {
  const { userData, setUserData} = useContext(UserContext)
        


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

        const loginResponse = await axios.post('/login', newUser)
        setUserData({
          token: loginResponse.data.token,
          user: loginResponse.data.user,
        });
        localStorage.setItem("auth-token",loginResponse.data.token)

        setUser({
          userName:'',
          password:'',
        })
      }catch (err) {
        console.log(err)
        // err.response.data.msg
          // ? setErrorMsg(err.response.data.msg)
          // : setErrorMsg("We have an error!");
      }
  }


  return (
    <div>
      <h1>Login Here</h1>
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
        <button type="submit">LOGIN</button>
      </form>
    </div>
  )
}

export default Login
