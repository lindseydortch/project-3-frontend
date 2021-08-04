import React, {useState} from 'react'

const Likes = ({post}) => {

  const [l, setLikes] = useState(0)
  // console.log(l)

  const addLikes = (_id, likes, message) => {
    _id = post._id
    likes = l + 1
    message = post.message
    fetch(`http://localhost:4000/group`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({_id, likes, message}) 
        })
      .then(res => res.json())
      .then(setLikes(parseInt(likes)))
      .then(fetch(`http://localhost:4000/group`))
  }

  const unLike = (_id, likes, message) => {
    _id = post._id
    likes = l - 1
    message = post.message
    fetch(`http://localhost:4000/group`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({_id, likes, message}) 
        })
      .then(res => res.json())
      .then(setLikes(parseInt(likes)))
      .then(fetch(`http://localhost:4000/group`))
  }

  return (
    <div>
      <p className="likeCount">

      Likes: {l}
      </p>
      <button className="btnLike add" onClick={() => addLikes(l)} >+</button>
      <button className="btnLike subtract" onClick={() => unLike()}>-</button>
    </div>
  )
}

export default Likes