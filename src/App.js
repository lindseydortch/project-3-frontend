import "./App.css";
import Header from "./components/header/header";

import { Route } from "react-router-dom";
import EventsHomePage from "./pages/eventsHomePage/events-home-page";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import GroupsHomePage from "./pages/groupsHomePage/groups-homepage";
import CityLandingPage from "./pages/eventsHomePage/city-landing-page";


function App() {
  return (
    <div>
      <Header />
      <Route path="/groups" component={GroupsHomePage} />
      <Route path="/signin" component={SignInSignUp} />
      <Route path='/events' component={CityLandingPage} />
      <Route path="/events/chicago" component={EventsHomePage} />
      <Route path="/events/kansascity" component={EventsHomePage} />
      <Route path="/events/dallas" component={EventsHomePage} />
      <Route path="/events/orlando" component={EventsHomePage} />
 
    </div>
  );
}

export default App;
