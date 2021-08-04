import React from "react";
import { Link } from "react-router-dom";

// THIS IS WHERE THE ALL CITY'S WILL BELISTED, LINKS TO ROUTE TO OTHER CITY'S VIEWS AND THEN SHOW THEIR EVENTS AT THAT SPECIFIC CITY

function CityDirectory({}) {
  return (
    <section className="city-directory">
      <div className="city-directory_list">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" alt="Chicago" />
        <Link to="/events/chicago"> Chicago, IL </Link>
        </div>
        <div className="card">
        <img src="https://images.unsplash.com/photo-1580536792511-b3cc93006b70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" alt="Dallas" />
        <Link to="/events/dallas"> Dallas, TX </Link>
        </div>
        <div className="card">
        <img src="https://images.unsplash.com/photo-1536622638768-9403a9d35a1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" alt="Kansas City" />
        <Link to="/events/kansascity"> Kansas City, MO </Link>
        </div>
        <div className="card">
        <img src="https://images.unsplash.com/photo-1609184889233-eff6dd93def4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" alt="Orlando" />
        <Link to="/events/orlando"> Orlando, FL </Link>
        </div>
     
     
      

      </div>
    </section>
  );
}

export default CityDirectory;
