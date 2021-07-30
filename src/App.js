import "./App.css";
import Header from "./components/header/header";

import { Route /* , Switch */  } from "react-router-dom";

import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import GroupsHomePage from "./pages/groupsHomePage/groups-homepage";
// import CityLandingPage from "./pages/eventsHomePage/city-homepage";
// import EventList from "./components/events-group/events-list/events-list";
import EventUpdateForm from "./components/events-group/event-forms/EventUpdateForm";
import EventView from "./components/events-group/event-view-update-delete/event-view";
import EventForm from "./components/events-group/event-forms/EventForm";
import { useState } from "react";
import CityDirectory from "./pages/eventsHomePage/city-directory";

function App() {
  const [eventView, setEventView] = useState([]);

  return (
    <div>
      {/* <Switch> */}
      <Header />
      {/* WHY IS THE ROUTES FOR ADD/EDIT/DELETE HERE? -AKA */}
      {/* <Route exact path="/events" component={EventList} /> */}
      <Route exact path="/events/add" component={EventForm} />
      <Route
        exact
        path="/events/:id"
        render={(routerProps) => (
          <EventView
            setEventView={setEventView}
            match={routerProps.match}
            eventView={eventView}
          />
        )}
      />
      <Route
        path="/events/edit/:id"
        render={(routerProps) => (
          <EventUpdateForm
            setEventView={setEventView}
            match={routerProps.match}
            eventView={eventView}
          />
        )}
      />

      <Route path='/events' component={CityDirectory} />
      <Route path="/groups" component={GroupsHomePage} />
      <Route path="/signin" component={SignInSignUp} />

      {/* IT WAS PROVEN THAT ROUTES CAN BE ADDED IN ON OTHER COMPONENTS BELOW ISN'T NECESSARY -AKA */}
      {/* <Route path="/events/chicago" component={CityHomePage} />
      <Route path="/events/kansascity" component={CityHomePage} />
      <Route path="/events/dallas" component={CityHomePage} />
      <Route path="/events/orlando" component={CityHomePage} /> */}

      {/* </Switch> */}
    </div>
  );
}

export default App;
