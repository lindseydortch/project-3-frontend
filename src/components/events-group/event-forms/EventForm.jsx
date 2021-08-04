import React, { useState, useContext } from "react";
import {UserContext} from "../../../App";
import axios from "axios";
// possibly remove because of differt methods
// import DateTimePicker from "react-datetime-picker";
import { useHistory } from "react-router-dom";


const EventForm = (props) => {
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData)

let history = useHistory();

  const blankForm = {
    name: "",
    addedBy: "",
    type: "",
    city: "",
    date: "",
    interact:"",
    socialScale: "",
    cost: "",
    details: "",
    attending: [],
  };

  const [eventForm, setEventForm] = useState(blankForm);

  // const handleChange = (event) => {
  //   setEventForm({ ...eventForm, [event.target.id]: event.target.value });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventForm((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const url = "http://localhost:4000/event/add";
    console.log(eventForm);
    axios
    .post(url, { ...eventForm, addedBy: userData.user.userName })
    .then((res) => {
      // console.log(eventForm.location);
      console.log(res.data);
      history.push(`/event/${res.data._id}`);
      setEventForm({
        name: "",
        addedBy: "",
        type: "",
        city: "",
        date: "",
        interact:"",
        socialScale: "",
        cost: "",
        details: "",
        attending: [],
      });
      console.log(res.data._id);
      })
      .catch((err) => console.log(err.data));
  };
  return (
    <section className="addEventSection">
    <h1>Add Event</h1>
        <form className="form formAddEvent" onSubmit={handleSubmit}>
          <div className="form-group">
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Event Name"
            onChange={handleChange}
            value={eventForm.name}
          />
          </div>
          <div className="form-group">
          <label htmlFor="addedBy">Hosted by:  {userData.user.userName}</label>
          </div>
          <div className="form-group">
          <label htmlFor="type">Event Type:</label>
          <select
            type="text"
            id="type"
            name='type'
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

          </div>
          <div className="form-group">
          <label htmlFor="date">Date/Time:</label>
          <input type="datetime-local" id="date" name="date" onChange={handleChange} value={eventForm.date} />

          </div>
         <div className="form-group">
          <label htmlFor="City">City:</label>
          <select
            type="text"
            id="city"
            name="city"
            onChange={handleChange}
            value={eventForm.city}
          >
            <option placeholder="Choose Your City"></option>
            <option value="chicago">Chicago, IL</option>
            <option value="dallas">Dallas, TX</option>
            <option value="kansascity">Kansas City, MO</option>
            <option value="orlando">Orlando, FL</option>
          </select>

         </div>
          <div className="form-group">
          <label htmlFor="interact">Level of Interaction:</label>
          <select
            type="text"
            id="interact"
            name="interact"
            onChange={handleChange}
            value={eventForm.interact}
          >
            <option placeholder="Choose Your City"></option>
            <option value="online">Online</option>
            <option value="hybrid">Online &amp; In Person</option>
            <option value="inPerson">In Person</option>
          </select>
          </div>
          
          <div className="form-group">
          <label htmlFor="socialScale">Sociability Scale:</label>
          <select
            type="text"
            id="socialScale"
            name="socialScale"
            onChange={handleChange}
            value={eventForm.socialScale}
          >
            <option placeholder="Choose Your Level"></option>
            <option value="one">Minimal Interaction</option>
            <option value="two">Little Bit 'o Minglin</option>
            <option value="three">Pants Off Dance Off</option>
          </select>

          </div>
          <div className="form-group">
          <label htmlFor="cost">Event Cost:</label>
          <input
            type="number"
            id="cost"
            name="cost"
            placeholder="Event Cost"
            onChange={handleChange}
            value={eventForm.cost}
          />

          </div>
          <div className="form-group">
          <label htmlFor="details">Description:</label>
          <textarea
            type="text"
            id="details"
            name="details"
            cols="30"
            rows="10"
            placeholder="Add your event description here"
            onChange={handleChange}
            value={eventForm.details}
          ></textarea>

          </div>
          <div className="form-group">
          <label htmlFor="attending" classname="checkboxLabel">Attending:</label>
          <input
            type="checkbox"
            id="attending"
            name="attending"
            placeholder=""
            onChange={handleChange}
            value="true"
            className="checkbox"
          />
          </div>
          <div className="form-group">
          <button type="submit" className="btn btnMistyRose u-margin-top-25">ADD EVENT</button>

          </div>
        </form>
      </section>
  );
};

export default EventForm;