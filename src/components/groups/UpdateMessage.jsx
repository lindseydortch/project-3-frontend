import React from 'react'

const UpdateMessage = ({handleSubmit, handleUpdate, formState}) => {

    return (
        <div>
            <form className="form" onSubmit={handleSubmit} >
                <div className="form-group">
                <label htmlFor="message">Update: </label>
                <textarea id="message" cols="30" rows="5" value={formState.message} onChange={handleUpdate}></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Update" />
                </div>
            </form>
        </div>
    )
}

export default UpdateMessage
