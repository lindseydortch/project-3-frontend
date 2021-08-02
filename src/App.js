import './App.css';
import EventForm from "./components/events-group/event-forms/EventForm"
import Header from "./components/header/header";
import { Route, Link } from "react-router-dom";
import Groups from './components/groups/Groups';
import Group from './components/groups/Group';

import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import GroupsHomePage from "./pages/groupsHomePage/groups-homepage";
import EventUpdateForm from "./components/events-group/event-forms/EventUpdateForm";
import EventView from "./components/events-group/event-view-update-delete/event-view";
import { useState } from "react";
import CityDirectory from "./pages/eventsHomePage/city-directory";
import CityHomePage from "./pages/eventsHomePage/city-homepage";

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/auth/Profile'

function App() {
  const [eventView, setEventView] = useState([]);

  return (

    <div>
      <Header />
    <Link to='/events/add'>
        Add Event
      </Link>
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
          <Route exact path='/events/add'
        component={EventForm}/>
        <Route exact path='/groups' component={Groups} />
        <Route exact path='/group' component={Group} />

        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />


    </div>
  );
}

export default App;
