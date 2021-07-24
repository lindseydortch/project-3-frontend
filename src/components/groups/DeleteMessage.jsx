import React from 'react'

const DeleteMessage = ({deletePost, post}) => {
    console.log(post)
    return (
        <div>
           <button className="btn" onClick={() => deletePost(post)}>Delete</button>
        </div>
    )
}

export default DeleteMessage
