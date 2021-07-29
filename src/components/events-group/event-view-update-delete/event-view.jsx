import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const EventView = ({match, eventView, setEventView}) => {
    useEffect(() => {
          const id = match.params.id;
          const url = `http://localhost:4000/events/${id}`
          axios.get(url)
          .then((res) => {
            const data = res.data;
            setEventView(data)
            console.log('data has been received')
          })
          .catch(() => {
            console.log('error retreiving data')
          })
      },[])
      function deleteEvent() {
          const id = match.params.id;
          const url = `http://localhost:4000/events/${id}`
          axios.delete(url)
        }
  
    return (
        <div>
            <h1>{eventView.name}</h1>
            <Link to={"/events/edit/" + eventView._id }>UPDATE</Link>
            <Link to={"/events"} onClick={deleteEvent}>DELETE</Link>
        </div>
    
    )
}

export default EventView
