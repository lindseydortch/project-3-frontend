import React, {useState} from 'react'

const Likes = ({post}) => {

  const [l, setLikes] = useState(post.likes)
  // console.log(l)

  const addLikes = (_id, likes, message) => {
    _id = post._id
    likes = l + 1
    message = post.message
    fetch(`http://localhost:8000/group`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({_id, likes, message}) 
        })
      .then(res => res.json())
      .then(setLikes(parseInt(likes)))
      .then(fetch(`http://localhost:8000/group`))
  }

  const unLike = (_id, likes, message) => {
    _id = post._id
    likes = l - 1
    message = post.message
    fetch(`http://localhost:8000/group`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({_id, likes, message}) 
        })
      .then(res => res.json())
      .then(setLikes(parseInt(likes)))
      .then(fetch(`http://localhost:8000/group`))
  }

  return (
    <div>
      Likes: {l}
      <button className="btn" onClick={() => addLikes(l)} >+</button>
      <button className="btn" onClick={() => unLike()}>-</button>
    </div>
  )
}

export default Likes
