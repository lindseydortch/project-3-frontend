import React, { useState } from 'react'
import axios from 'axios'
import DateTimePicker from 'react-datetime-picker'
import { useHistory } from 'react-router-dom'


const EventUpdateForm = ({eventView, match}) => {
    const history = useHistory()
    const blankForm = {
        name: '',
        type: '',
        user: '',
        location: '',
        online: '',
        inPerson: '',
        socialComfortScale: '',
        description: '',
        attending: ''
      }
    const [updateForm, setUpdateForm] = useState(blankForm);
    const [date, setDate] = useState(new Date())
    const handleChange = (event) => {
        setUpdateForm({ ...updateForm, [event.target.id]: event.target.value })
    }
  
    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/events')
        console.log(updateForm)
        const id = match.params.id
        console.log(id)
        const url = `http://localhost:8000/events/edit/${id}`
        axios.put(url, {...updateForm, dateAndTime:date})
        .then(res => {
            console.log(res.data)
            setUpdateForm(blankForm)            
        })
        .catch(err => console.log(err.data))
    };
    return (
        <div>
            <h1>Update Event</h1>
            <div className="form">
                <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder={eventView.name} onChange={handleChange} value={updateForm.name}/>
                    <label htmlFor="name">Host:</label>
                    <input type="text" id="user" placeholder={eventView.user} onChange={handleChange} value={updateForm.user}/>
                    <label htmlFor="type">Type:</label>
                    <select type="text" id="type" onChange={handleChange} value={updateForm.type}>
                            <option value="Sports and Fitness">Sports and Fitness</option>
                            <option value="Games">Games</option>
                            <option value="Food">Food</option>
                            <option value="">dontknow</option>
                            <option value="">Category</option>
                            <option value="">Category</option>
                    </select>
                    <label htmlFor="location">Location:</label>
                    <select type="text" id="location" onChange={handleChange} value={updateForm.location}>
                            <option value="Orlando">Orlando</option>
                            <option value="Dallas">Dallas</option>
                            <option value="Kansas City">Kansas City</option>
                            <option value="Chicago">Chicago</option> 
                    </select> 
                    <label htmlFor="datetime">Date/Time:</label>
                    <DateTimePicker onChange={setDate} value={date}/>
                
                    <label htmlFor="online">Online:</label>
                    <input type="checkbox" id="online" placeholder="" onChange={handleChange} value="Online"/>
                    <label htmlFor="inPerson">In Person:</label>
                    <input type="checkbox" id="inPerson" placeholder="" onChange={handleChange} value="In Person"/>
                    <label htmlFor="socialComfortScale">Sociability Scale:</label>
                    <input type="checkbox" id="socialComfortScale" placeholder="" onChange={handleChange} value="one emoji"/>
                    <input type="checkbox" id="socialComfortScale" placeholder="" onChange={handleChange} value="5 emoji"/>
                    <label htmlFor="description">Description:</label>
                    <textarea type="text" id="description" cols="30" rows="10" placeholder="click here to type message" onChange={handleChange} value={updateForm.description}></textarea>
                    <button type="submit">Update EVENT</button>
                </form>
                

            </div>
        </div>
        
    )}
                        


export default EventUpdateForm