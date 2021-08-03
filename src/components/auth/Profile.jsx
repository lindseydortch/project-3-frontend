import React, { useContext } from 'react'
import {UserContext} from "../../App"

function Profile() {
    const { userData, setUserData } = useContext(UserContext)
    console.log(userData.user);
    return (
        <div>
            <h1>User Profile</h1>
            <h4><b>User ID:</b> {userData.user.id}</h4>
            <h4><b>Username:</b> {userData.user.userName}</h4>
            <h4><b>Current City:</b> {userData.user.city}</h4>
            <h4><b>Current State:</b> {userData.user.state}</h4>
            <h4><b>Date Registered:</b> {userData.user.date}</h4>
        </div>
    )
}

export default Profile
