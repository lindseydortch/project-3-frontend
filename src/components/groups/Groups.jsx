import React from 'react'
import { Link } from 'react-router-dom'

const Groups = () => {
    return (
        <section className="groups">
            <div className="groups_list">

            
            <div className="card">
            <Link to="/groups/sportsfitness">Sports and Fitness</Link>

            </div>
            <div className="card">
            <Link to="/groups/games">Games</Link>
            </div>
            <div className="card">
            <Link to="/groups/food">Food</Link>
            </div>
            <div className="card">
            <Link to="/groups/movies">Movies</Link>
            </div>
            <div className="card">
            <Link to="/groups/music">Music</Link>
            </div>
            
            </div>
            
            
        </section>
    )
}

export default Groups
