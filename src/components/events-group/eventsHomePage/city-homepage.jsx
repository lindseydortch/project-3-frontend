import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


// THIS IS WHERE THE CITY WILL DISPLAY ALL OF THEIR INDV EVENTS ? Event's Directiry?  ADD AND DELETE SHOULD BE ON THIS PAGE

function CityHomePage({ match }) {
  console.log("cityHomePage Hit");

  console.log(match);
  console.log(match.params);
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    getEventData();
  }, []);

  function getEventData() {
    const url = "http://localhost:4000/events";
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        console.log(data);
        setEventData(data);
        console.log("data has been received");
      })
      .catch(() => {
        console.log("error retreiving data");
      });
  }

  let city = match.params.city.toLowerCase();
  console.log(city);

  let cityEvent = eventData.filter(
    (event) => city === event.city.toLowerCase()
  );
  console.log(cityEvent);
  return (

//       <section>
//         <Link to='/eventadd'> Add Event </Link>
//         {cityEvent.map((event) => (
//           <div key={event.id}>
//             <h2>Event:{event.name}</h2>
//             <h2>Host:{event.addedBy}</h2>
//             <h2>Type:{event.type}</h2>
//             <h3>City:{event.city}</h3>
//             <h3>Event Date:{event.date}</h3>
//             <h3>Interaction Level:{event.interact}</h3>
//             <h3>Social Scale:{event.socialScale}</h3>
//             <h3>Cost:{event.cost}</h3>
//             <Link to={"/event/" + event._id}>View Event</Link>

    <section className="cityHomepage">
      <Link to='/eventadd' className="btn btnMistyRose addEvent"> Add Event </Link>
      <div className="events">


      
      {cityEvent.map((event) => (
        <div key={event.id} className="event">
          <h2 className="event_heading">{event.name}</h2>
          
          <h2 className="event_host">Hosted By: {event.addedBy}</h2>
          {
            event.interact === 'online' ? <h3 className="event_social">Online</h3> : <h3 className="event_social">In Person</h3>
          }
          <h2 className="event_type">Type of Event: {event.type}</h2>
          <h3 className="event_city">City: {event.city}</h3>
          {/* <h3>State:{event.state}</h3> */}
          <h3 className="event_date">Event Date: {event.date}</h3>
          {/* <h3>Online:{event.online.toString()}</h3>
          <h3>In Person:{event.inPerson.toString()}</h3> */}
          
          <h3 className="event_cost">${event.cost}</h3>
          {/* <p>Event Details:{event.details}</p> */}
          <Link to={"/event/" + event._id} className="btn btnFireOpal">View Event</Link>

        </div>
        
      ))}
      </div>
    </section>
)
}

export default CityHomePage;
