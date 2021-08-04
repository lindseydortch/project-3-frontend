import React from 'react'

const DeleteMessage = ({deletePost, post}) => {
    // console.log(post)
    return (
        <div className="u-margin-top-25">
           <button className="btn" onClick={() => deletePost(post)}className="btn btnMistyRose" >Delete</button>
        </div>
    )
}

export default DeleteMessage
