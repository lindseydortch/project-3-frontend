import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventView = (props) => {
  console.log(props);

  const [event, setEvent] = useState([]);

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

  function deleteEvent() {
    const id = props.match.params.id;
    const url = `http://localhost:4000/event/${id}`;
    axios.delete(url);
  }
  console.log(event);
  return (
    <div>
      <h1>Event Name:{event.name}</h1>
      <h1>Event Date:{event.date}</h1>
      <h1>Location: {event.location}</h1>
      <h1>Event Type:{event.type}</h1>
      <h1>User:{event.user}</h1>

      <Link to={"/event/edit/" + event._id}>UPDATE</Link>
      <Link to={"/events"} onClick={deleteEvent}>
        DELETE
      </Link>
    </div>
  );
};

export default EventView;