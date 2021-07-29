import React from "react";
import { Link } from "react-router-dom";

function CityLandingPage() {
  return (
    <div>
      <Link to="/events/chicago"> Chicago </Link>
      <Link to="/events/dallas"> Dallas </Link>
      <Link to="/events/kansascity"> Kansas City </Link>
      <Link to="/events/orlando"> Orlando </Link>
    </div>
  );
}

export default CityLandingPage;
