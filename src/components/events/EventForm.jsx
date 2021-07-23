import React, { useState } from 'react'

const EventForm = () => {
    const blankForm = {
        name: '',
        type: '',
        location: '',
        online: '',
        inPerson: '',
        indoor: '',
        outdoor: '',
        fun: '',
        professional: '',
        cost: '',
        socialComfortScale: '',
        description: '',
        //if person clicks on an event maybe add that to their interests 
      }
    const [eventForm, setEventForm] = useState(blankForm);
    const handleChange = (event) => {
        setEventForm({ ...eventForm, [event.target.id]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(eventForm)
        setEventForm(blankForm)
    };
    return (
        <div>
            <h1>Add Event</h1>
            <div className="Form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="" onChange={handleChange} value={eventForm.name}/>
                    <label htmlFor="type">Type:</label>
                    <select id="type" onChange={handleChange} value={eventForm.type}>
                            <option value="">Catergory</option>
                            <option value="">Category</option>
                            <option value="">Category</option>
                            <option value="">Category</option>
                            <option value="">Category</option>
                            <option value="">Category</option>
                    </select>
                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" placeholder="" onChange={handleChange} value={eventForm.location}/>
                        {/* <select id="location" onChange={handleChange} value={eventForm.location}> */}
                            {/* <option value="Orlando">Orlando</option>
                            <option value="Dallas">Dallas</option>
                            <option value="Kansas City">Kansas City</option>
                            <option value="Chicago">Chicago</option> */}
                        {/* </select> */}
                    <label htmlFor="online">Online:</label>
                    <input type="checkbox" id="online" placeholder="" onChange={handleChange} value="Online"/>
                    <label htmlFor="inPerson">In Person:</label>
                    <input type="checkbox" id="inPerson" placeholder="" onChange={handleChange} value="In Person"/>
                    <label htmlFor="fun">Fun:</label>
                    <input type="checkbox" id="fun" placeholder="" onChange={handleChange} value="Fun"/>
                    <label htmlFor="professional">Professional:</label>
                    <input type="checkbox" id="professional" placeholder="" onChange={handleChange} value="Professional"/>
                    <label htmlFor="cost">Cost:</label>
                    <input type="number" id="cost" placeholder="" onChange={handleChange} value={eventForm.cost}/>
                    <label htmlFor="socialComfortScale">Sociability Scale:</label>
                    <input type="checkbox" id="low" placeholder="" onChange={handleChange} value="one emoji"/>
                    <input type="checkbox" id="high" placeholder="" onChange={handleChange} value="5 emoji"/>
                    <label htmlFor="description">Description:</label>
                    <textarea id="message" cols="30" rows="10" placeholder="click here to type message" onChange={handleChange} value={eventForm.message}></textarea>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </div>
    )}


export default EventForm