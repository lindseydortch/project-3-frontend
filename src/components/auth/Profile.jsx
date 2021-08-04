import React, { useContext, useState, useEffect } from 'react'
import {UserContext} from "../../App"
import axios from "axios"
import {Link} from "react-router-dom"

function Profile() {
    const { userData, setUserData } = useContext(UserContext)
    const [eventData, setEventData] = useState([])

    useEffect(() => {
        const url = 'http://localhost:4000/events'
        axios.get(url)
        .then((res) => {
          const data = res.data;
          console.log(data)
          setEventData(data)
          console.log('data has been received on Profile Page')
        })
        .catch(() => {
          console.log('error retreiving data on Profile Page')
        })
      },[])

      const deleteProfile = () => {
          axios.delete('/profile', {
              headers:{
                  "auth-token":userData.token,
              }
          })
          .then((window.location ="/login"));
          setUserData({
              token: undefined,
              user: undefined,
          });
          localStorage.setItem('auth-token', "");
      }
console.log(eventData);
console.log(userData.user.userName);
      let userEvents = eventData.filter((event) => ((event.addedBy)=== userData.user.userName))
      console.log(userEvents);



    console.log(userData.user);
    return (
        <div>
            <h1>User Profile </h1>
            <h4><b>User ID:</b> {userData.user.id}</h4>
            <h4><b>Username:</b> {userData.user.userName}</h4>
            <h4><b>Current City:</b> {userData.user.city}</h4>
            <h4><b>Interaction Level:</b> {userData.user.interact}</h4>
            <h4><b>Date Registered:</b> {userData.user.date}</h4>
        <section>
            <h3>Events added by {userData.user.userName} </h3>
            {userEvents.map((event) => (
          <div key={event.id}>
          <h2>Event:{event.name}</h2>
          <h2>Host:{event.addedBy}</h2>
          <h2>Type:{event.type}</h2>
          <h3>City:{event.city}</h3>
          <h3>Event Date:{event.date}</h3>
          <h3>Cost:{event.cost}</h3>
          <Link to={"/event/" + event._id}>View Event</Link>

          </div>
        ))}
      </section>
        
        </div>
    )
}

export default Profile
