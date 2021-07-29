import "./App.css";
import Header from "./components/header/header";

import { Route, Switch } from "react-router-dom";
import CityHomePage from "./pages/eventsHomePage/city-home-page";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import GroupsHomePage from "./pages/groupsHomePage/groups-homepage";
//import CityLandingPage from "./pages/eventsHomePage/city-landing-page";
import EventList from './components/events-group/events-list/events-list';
import EventUpdateForm from './components/events-group/event-forms/EventUpdateForm';
import EventView from './components/events-group/event-view-update-delete/event-view';
import EventForm from "./components/events-group/event-forms/EventForm";
import { useState } from 'react'




function App() {
  const [eventView, setEventView] = useState([])

  return (
    <div>
       {/* <Switch> */}
      <Header />Î
      <Route exact path='/events' component={EventList}/>
      <Route exact path='/events/add' component={EventForm}/>
      <Route exact path='/events/:id' render={routerProps => (<EventView setEventView={setEventView}  match={routerProps.match} eventView={eventView}/>)}/>
      <Route path='/events/edit/:id' 
        render={routerProps => (<EventUpdateForm setEventView={setEventView} match={routerProps.match} eventView={eventView}/>)}/>    
      <Route path="/groups" component={GroupsHomePage} />
      <Route path="/signin" component={SignInSignUp} />
      {/* <Route path='/events' component={CityLandingPage} /> */}
      {/* <Route path='/events' component={CityLandingPage} /> */}
      <Route path="/events/chicago" component={CityHomePage} />
      <Route path="/events/kansascity" component={CityHomePage} />
      <Route path="/events/dallas" component={CityHomePage} />
      <Route path="/events/orlando" component={CityHomePage} />
      <Route path="/events/chicago" component={CityHomePage} />
      <Route path="/events/kansascity" component={CityHomePage} />
      <Route path="/events/dallas" component={CityHomePage} />
      <Route path="/events/orlando" component={CityHomePage} />
 
        {/* </Switch> */}
    </div>
  );
}

export default App;
