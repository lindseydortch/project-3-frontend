import React from 'react'
import { Link } from 'react-router-dom'

const Groups = () => {
    return (
        <div>
            <h1>Groups component</h1>
            <Link to="/groups/sportsfitness">Sports and Fitness</Link>
            <Link to="/groups/games">Games</Link>
            <Link to="/groups/food">Food</Link>
            <Link to="/groups/movies">Movies</Link>
            <Link to="/groups/music">Music</Link>
        </div>
    )
}

export default Groups
