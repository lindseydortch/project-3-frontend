import React, { useState } from "react";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";
import { useHistory } from "react-router-dom";

import { Redirect } from "react-router";

const EventForm = (props) => {

console.log(props);

  let history = useHistory();
  const blankForm = {
    name: "",
    type: "",
    user: "",
    location: "",
    online: "",
    inPerson: "",
    socialComfortScale: "",
    description: "",
    attending: false,
  };
  const [eventForm, setEventForm] = useState(blankForm);
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder=""
            onChange={handleChange}
            value={eventForm.name}
          />
          <label htmlFor="name">Host:</label>
          <input
            type="text"
            id="user"
            placeholder=""
            onChange={handleChange}
            value={eventForm.user}
          />
          <label htmlFor="type">Type:</label>
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
          <label htmlFor="location">Location:</label>
          <select
            type="text"
            id="location"
            onChange={handleChange}
            value={eventForm.location}
          >
            <option placeholder="Choose Your City"></option>
            <option value="orlando">Orlando</option>
            <option value="dallas">Dallas</option>
            <option value="kansascity">Kansas City</option>
            <option value="chicago">Chicago</option>
          </select>
          <label htmlFor="datetime">Date/Time:</label>
          <DateTimePicker onChange={setDate} value={date} />
          <label htmlFor="online">Online:</label>
          <input
            type="checkbox"
            id="online"
            placeholder=""
            onChange={handleChange}
            value="Online"
          />
          <label htmlFor="inPerson">In Person:</label>
          <input
            type="checkbox"
            id="inPerson"
            placeholder=""
            onChange={handleChange}
            value="In Person"
          />
          <label htmlFor="socialComfortScale">Sociability Scale:</label>
          <input
            type="checkbox"
            id="socialComfortScale"
            placeholder=""
            onChange={handleChange}
            value="one emoji"
          />
          <input
            type="checkbox"
            id="socialComfortScale"
            placeholder=""
            onChange={handleChange}
            value="5 emoji"
          />
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            id="description"
            cols="30"
            rows="10"
            placeholder="click here to type message"
            onChange={handleChange}
            value={eventForm.description}
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