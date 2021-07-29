import React, { useState, useEffect } from "react";
import "./events-list.styles.scss";
import axios from "axios";

// here we will filter then pass data into each city that they can choose from.

function EventsList(props) {
  useEffect(() => {
    getEventData();
  }, []);

  const [eventData, setEventData] = useState([]);

  // grabbing the data from backend db using axios
  function getEventData() {
    const url = "http://localhost:4000/events";
    console.log(url);

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        setEventData(data);
        console.log("data has been received");
      })
      .catch(() => {
        console.log("error retreiving data");
      });
  }

  return (
    <div>
      <section>
        {eventData.map((event) => (
          <div className="eventlisting" key={event.id}>
            <h2>{event.title}</h2>
            {/* <h2>{event.type}</h2> */}
            <h3>{event.location}</h3>
            <h3>{event.user}</h3>
          </div>
        ))}

      </section>
    </div>
  );
}

export default EventsList;
