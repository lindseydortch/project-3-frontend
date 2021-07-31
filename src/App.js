import "./App.css";
import Header from "./components/header/header";

import { Route, Switch } from "react-router-dom";

import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import GroupsHomePage from "./pages/groupsHomePage/groups-homepage";
import EventUpdateForm from "./components/events-group/event-forms/EventUpdateForm";
import EventView from "./components/events-group/event-view-update-delete/event-view";
import EventForm from "./components/events-group/event-forms/EventForm";
import { useState } from "react";
import CityDirectory from "./pages/eventsHomePage/city-directory";
import CityHomePage from "./pages/eventsHomePage/city-homepage";

function App() {
  const [eventView, setEventView] = useState([]);

  return (
    <div>
      <Header />
      <Route path="/events" component={CityDirectory} />
      <Route
        exact
        path="/event/:id"
        render={(routerProps) => (
          <EventView
            setEventView={setEventView}
            match={routerProps.match}
            eventView={eventView}
          />
        )}
      />


        <Route exact path="/eventadd" component={EventForm} />
        <Route
          path="/event/edit/:id"
          render={(routerProps) => (
            <EventUpdateForm
              setEventView={setEventView}
              match={routerProps.match}
              eventView={eventView}
            />
          )}
        />

        <Route
          path="/events/:city"
          render={(routerProps) => <CityHomePage match={routerProps.match} />}
        />
        {/* <Route exact path="/event/:id" component={EventView} /> */}
        <Route path="/groups" component={GroupsHomePage} />
        <Route path="/signin" component={SignInSignUp} />

    </div>
  );
}

export default App;
