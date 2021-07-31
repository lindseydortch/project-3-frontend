import React from 'react'

const DeleteMessage = ({deletePost, id}) => {
    console.log(id)
    return (
        <div>
            <form className="form">
            <div className="form-group">
                    <input type="submit" value="Delete" onClick={deletePost}/>
                </div>
            </form>
        </div>
    )
}

export default DeleteMessage
