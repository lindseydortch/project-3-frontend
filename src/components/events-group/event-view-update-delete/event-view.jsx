import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventView =  (props) => {
  console.log(props);

  useEffect(() => {
    const id = props.match.params.id;
    const url = `http://localhost:4000/event/${id}`;
    console.log(url);
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        const data = res.data;
        setEvent(data);
        console.log("data has been received");
      })
      .catch(() => {
        console.log("error retreiving data");
      });
  }, []);

  const [event, setEvent] = useState([]);
  function deleteEvent() {
    const id = props.match.params.id;
    const url = `http://localhost:4000/event/${id}`;
    axios.delete(url);
  }
  console.log(event);
  return (
    <section className="eventSingle">

    
    <div className="event">
      <h2 className="event_heading">{event.name}</h2>
      <h2 className="event_host">Hosted By:{event.addedBy}</h2>
      {
        event.inPerson ? <h3 className="event_social">In Person</h3> : <h3 className="event_social">Online</h3>
      }
      <h2 className="event_type">Type of Event:{event.type}</h2>
      <h3 className="event_city">City:{event.city}</h3>
      <h3 className="event_date">Event Date:{event.date}</h3>
      <h3 className="event_cost">${event.cost}</h3>
      <p className="event_details">{event.details}</p>

      <Link to={"/event/edit/" + event._id} className="btn btnFireOpal">UPDATE</Link>
      <Link to={"/events"} onClick={deleteEvent} className="btn btnFireOpal u-margin-top-1">
        DELETE
      </Link>
    </div>
    </section>
  );
};

export default EventView;
