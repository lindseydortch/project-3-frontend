import React, {useState} from 'react'

const AddMessage = ({messages, setMessages}) => {
    const initialState = {
        message: ''
    }

    const [form, setForm] = useState(initialState)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form)
        fetch(`http://localhost:8000/group`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form) 
        })
        .then(res => res.json())
        .then(message => setMessages([...messages, message]))
        setForm(initialState)
      }
    
      const handleChange = (event) => {
        setForm({...form, [event.target.id]: event.target.value})
      }

    return (
        <div>
            <h1>Add Message Here</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                <label htmlFor="message">Post: </label>
                <textarea id="message" cols="30" rows="10" placeholder="Add Message Here" onChange={handleChange}></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add" />
                </div>
            </form>
        </div>
    )
}

export default AddMessage
