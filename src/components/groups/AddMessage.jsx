import React from 'react'

const AddMessage = () => {
    return (
        <div>
            <h1>Add Message Here</h1>
            <form className="form">
                <div className="form-group">
                <label htmlFor="message">Post: </label>
                <textarea id="message" cols="30" rows="10" placeholder="Add Message Here"></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add" />
                </div>
            </form>
        </div>
    )
}

export default AddMessage
