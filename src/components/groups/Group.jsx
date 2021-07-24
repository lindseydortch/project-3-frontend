import React from 'react'
import AddMessage from './AddMessage'
import UpdateMessage from './UpdateMessage'
import DeleteMessage from './DeleteMessage'

const Group = () => {

    const dummyGroupPosts =[
        {id: 1,message: "hey group"},
        {id: 2, message: "Chase please stop screaming"},
        {id: 3, message: "My food is almost here"},
        {id: 4, message: "Asif said we are motivating"},
        {id: 5, message: "we are friends"}
    ]

    const deletePost = (event, id) => {
        event.preventDefault()
        console.log(`delete: ${id}`)
    }

    return (
        <div>
            <h1>Single Group Component</h1>
            <p>On this page, users will be able to see a specific group, see, add, update and delete messages</p>
            {
                dummyGroupPosts.map((post) => (
                    <div key={post.id} className="post">
                        <p>{post.message}</p>
                        <DeleteMessage id={post.id} deletePost={deletePost} />
                    </div>
                )) 
            }
            <AddMessage />
            <UpdateMessage />
            
        </div>
    )
}

export default Group
