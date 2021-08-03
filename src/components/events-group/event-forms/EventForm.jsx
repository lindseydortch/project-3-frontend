import React, { useState, useContext } from "react";
import {UserContext} from "../../../App";
import axios from "axios";
// possibly remove because of differt methods
import DateTimePicker from "react-datetime-picker";
import { useHistory } from "react-router-dom";
// import { Redirect } from "react-router";


const EventForm = (props) => {
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData)

console.log(props);
let history = useHistory();

  const blankForm = {
    name: "",
    addedBy: "",
    type: "",
    city: "",
    state:"",
    date: "",
    online: "",
    inPerson: "",
    cost: "",
    socialComfortScale: "",
    description: "",
    attending: [],
  };

  const [eventForm, setEventForm] = useState(blankForm);

  // going to implment std html date method possibly remove this
  const [date, setDate] = useState(new Date());

  const handleChange = (event) => {
    setEventForm({ ...eventForm, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:4000/event/add";
    axios
    .post(url, { ...eventForm, dateAndTime: date })
    .then((res) => {
        history.push(`/event/${res.data._id}`);
        // console.log(eventForm.location);
        console.log(res.data);
        // return <Redirect to={`/events/${eventForm.location}`} />
        // setEventForm(blankForm);
        
      })
      .catch((err) => console.log(err.data));
  };
  return (
    <div>
    <h1>Add Event</h1>
      <div className="form">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Event Title"
            onChange={handleChange}
            value={eventForm.name}
          />
          <br/>
          <label htmlFor="addedBy">Host:</label>
          <input
            type="text"
            id="addedBy"
            placeholder={userData.user.userName}
            value={userData.user.userName}
          />
          <br/>
          <label htmlFor="type">Event Type:</label>
          <select
            type="text"
            id="type"
            onChange={handleChange}
            value={eventForm.type}
          >
            <option placeholder=""></option>
            <option value="Sports and Fitness">Sports and Fitness</option>
            <option value="Games">Games</option>
            <option value="Food">Food</option>
            <option value="Movies">Movies</option>
            <option value="Music">Music</option>
          </select>
          <br/>
          <label htmlFor="City">City:</label>
          <select
            type="text"
            id="city"
            onChange={handleChange}
            value={eventForm.city}
          >
            <option placeholder="Choose Your City"></option>
            <option value="orlando">Orlando</option>
            <option value="dallas">Dallas</option>
            <option value="kansascity">Kansas City</option>
            <option value="chicago">Chicago</option>
          </select>
          <br/>
          <label htmlFor="date">Date/Time:</label>
          <input type="datetime-local" id="date" onChange={handleChange} value={eventForm.date} />
          <br/>
          <label htmlFor="online">Online:</label>
          <input
            type="checkbox"
            id="online"
            placeholder="True or False"
            onChange={handleChange}
            value={eventForm.online}
          />
          <br/>
          <label htmlFor="inPerson">In Person:</label>
          <input
            type="checkbox"
            id="inPerson"
            placeholder="True or False"
            onChange={handleChange}
            value={eventForm.inPerson}
          />
          <label htmlFor="socialComfortScale">Sociability Scale:</label>
          <input
            type="checkbox"
            id="socialComfortScale"
            placeholder="1"
            onChange={handleChange}
            value="1 emojie"
          />
          <input
            type="checkbox"
            id="socialComfortScale"
            placeholder="2"
            onChange={handleChange}
            value="2 emoji"
          />
          <input
            type="checkbox"
            id="socialComfortScale"
            placeholder="3"
            onChange={handleChange}
            value="3 emoji"
          />
          <br/>
         <label htmlFor="cost">Event Cost:</label>
          <input
            type="number"
            id="cost"
            placeholder="Event Cost:"
            onChange={handleChange}
            value={eventForm.cost}
          />
          <br/>
          <label htmlFor="details">Description:</label>
          <br/>
          <textarea
            type="text"
            id="details"
            cols="30"
            rows="10"
            placeholder="click here to type message"
            onChange={handleChange}
            value={eventForm.details}
          ></textarea>
          <label htmlFor="attending">Attending:</label>
          <input
            type="checkbox"
            id="attending"
            placeholder=""
            onChange={handleChange}
            value="true"
          />
          <button type="submit">ADD EVENT</button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;