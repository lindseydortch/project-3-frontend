import React from 'react'
import {Route, Link } from 'react-router-dom'
import CityHomePage from './city-homepage';

// THIS IS WHERE THE ALL CITY'S WILL BELISTED, LINKS TO ROUTE TO OTHER CITY'S VIEWS AND THEN SHOW THEIR EVENTS AT THAT SPECIFIC CITY

function CityDirectory({match}) {
    console.log(match);
    console.log(match.path);
    return (
        <div>
      <Link to="/events/chicago"> Chicago </Link>
      <Link to="/events/texas"> Texas </Link>
      <Link to="/events/kansascity"> Kansas City </Link>
      <Link to="/events/orlando"> Orlando </Link>

      <main className="routes">
      <Route path={`${match.path}/:city`} component={CityHomePage} />
      

      </main>
        </div>
    )
}

export default CityDirectory
