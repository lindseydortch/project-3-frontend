import React from 'react'

const UpdateMessage = () => {
    return (
        <div>
            <h1>Update Message Here</h1>
            <form className="form">
                <div className="form-group">
                <label htmlFor="message">Update: </label>
                <textarea id="message" cols="30" rows="10" placeholder="Update Message Here"></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Update" />
                </div>
            </form>
        </div>
    )
}

export default UpdateMessage
