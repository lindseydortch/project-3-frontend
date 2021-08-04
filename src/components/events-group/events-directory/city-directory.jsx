import React from "react";
import { Link } from "react-router-dom";

// THIS IS WHERE THE ALL CITY'S WILL BELISTED, LINKS TO ROUTE TO OTHER CITY'S VIEWS AND THEN SHOW THEIR EVENTS AT THAT SPECIFIC CITY

function CityDirectory({}) {
  return (
    <section className="city-directory">
      <Link to="/events/chicago"> Chicago </Link>
      <Link to="/events/dallas"> Dallas </Link>
      <Link to="/events/kansascity"> Kansas City </Link>
      <Link to="/events/orlando"> Orlando </Link>
    </section>
  );
}

export default CityDirectory;
