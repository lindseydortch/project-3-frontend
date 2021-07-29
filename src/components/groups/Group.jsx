import React, {useState, useEffect} from 'react'
import AddMessage from './AddMessage'
import UpdateMessage from './UpdateMessage'
import DeleteMessage from './DeleteMessage'
import Likes from './Likes'

const Group = () => {

    const [messages, setMessages] = useState()

    useEffect(() => {
        fetch(`http://localhost:8000/group`)
        .then(res => res.json())
        .then(messages => setMessages(messages))
      }, []) 

    const deletePost = (id) => {
        fetch(`http://localhost:8000/group`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    })
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(() => fetch(`http://localhost:8000/group`).then(res => res.json()).then(res => setMessages(res)))
    }

    return (
        <div>
            <h1>Single Group Component</h1>
            <p>On this page, users will be able to see a specific group, see, add, update and delete messages</p>
            { messages ?
                messages.map((post) => (
                    <div key={post._id} className="post">
                        <p>{post.message}</p>
                        <UpdateMessage messages={messages} post={post} setMessages={setMessages} />
                        <Likes post={post}/>
                        <DeleteMessage post={post} deletePost={deletePost} />
                    </div>
                )) 
                : ``
            }
            <AddMessage messages={messages} setMessages={setMessages} />
            
        </div>
    )
}

export default Group
