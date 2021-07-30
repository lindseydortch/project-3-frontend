import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import EventView from "../../components/events-group/event-view-update-delete/event-view";

// THIS IS WHERE THE CITY WILL DISPLAY ALL OF THEIR INDV EVENTS ? Event's Directiry?  ADD AND DELETE SHOULD BE ON THIS PAGE

function CityHomePage({ match }) {
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
  
  let city = match.params.city.toLowerCase()
  console.log(city);

  let cityEvent = eventData.filter((event) => city == event.location.toLowerCase());
  console.log(cityEvent);
  return (
    <div>
         <section>
          {cityEvent.map((event) => (
              <div  key={event.id} >
                <h2>{event.name}</h2>
                <h2>{event.type}</h2>
                <h3>{event.location}</h3>
                <h3>{event.user}</h3>
                <h3>{event.inPerson}</h3>
                <h3>{event.online}</h3>
                <p>{event.description}</p>
                <Link to={'/events/' + event._id}>checkoutevent</Link>
                <Route path={`/events/${event._id}`} component={EventView} />
                </div>
                ))}
             </section>
    
    </div>
  );
}

export default CityHomePage;
