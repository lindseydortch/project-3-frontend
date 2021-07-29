import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const EventList = () => {
  const [eventData, setEventData] = useState([])
    const handleChange = (event) => {
        setEventData({ ...eventData, [event.target.id]: event.target.value })
    }

    useEffect(() => {
        const url = 'http://localhost:4000/events'
        axios.get(url)
        .then((res) => {
          const data = res.data;
          console.log(data)
          setEventData(data)
          console.log('data has been received')
        })
        .catch(() => {
          console.log('error retreiving data')
        })
      },[])

  if (eventData) {
      return (
        <div>
        <Link to="/events/add">Add Event</Link>
        <section>
          {eventData.map((event) => (
              <div  key={event.id} onChange={handleChange}>
                <h2>{event.name}</h2>
                <h2>{event.type}</h2>
                <h3>{event.location}</h3>
                <h3>{event.user}</h3>
                <h3>{event.inPerson}</h3>
                <h3>{event.online}</h3>
                <p>{event.description}</p>
                <Link to={'/events/' + event._id}>checkoutevent</Link>
                </div>
                ))}
             </section>
      </div>
      )
    
  }

}

export default EventList

