import { createContext } from "react"
import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from 'axios'

// general components
import EventForm from "./components/events-group/event-forms/EventForm"
import Header from "./components/header/header";
import Groups from './components/groups/Groups';
import Group from './components/groups/Group';
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import GroupsHomePage from "./pages/groupsHomePage/groups-homepage";
import EventUpdateForm from "./components/events-group/event-forms/EventUpdateForm";
import EventView from "./components/events-group/event-view-update-delete/event-view";
import CityDirectory from "./pages/eventsHomePage/city-directory";
import CityHomePage from "./pages/eventsHomePage/city-homepage";
// auth 
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/auth/Profile'

export const UserContext = createContext()

 

function App() {
  // auth middleware
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })

  useEffect( () => {
    const isLoggedIn = async () => {
      let token = localStorage.getItem("auth-token")
      console.log(token);
      if (token == null) {
        localStorage.setItem("auth-token", "")
        token=""
      }

      // route is working now
      const tokenResponse = await axios.post(
        "/tokenIsValid",
        null,
        {headers: {"auth-token": token}}
      )
      console.log(tokenResponse.data)
      if(tokenResponse.data){
        const userResponse = await axios.get('/profile',
        {headers: {'auth-token':token}})
        console.log(tokenResponse.data);
        setUserData({
          token:token,
          user: userResponse.data
        })
      }
    }
    isLoggedIn()
  },[])

  const logout = () => {
    setUserData( {
      token:undefined,
      user:undefined
    })
  }

  // event view useState
  const [eventView, setEventView] = useState([]);
  return (

    <div>
      <UserContext.Provider value={{ userData, setUserData}} >
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

        </UserContext.Provider>
    </div>
  );
}

export default App;
