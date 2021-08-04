import { createContext } from "react";
import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

// general components
import EventForm from "./components/events-group/event-forms/EventForm";
import Header from "./components/header/header";
import Groups from "./components/groups/Groups";
import Group from "./components/groups/Group";
import EventUpdateForm from "./components/events-group/event-forms/EventUpdateForm";
import EventView from "./components/events-group/event-view-update-delete/event-view";
import CityDirectory from "./components/events-group/events-directory/city-directory";
import CityHomePage from "./components/events-group/eventsHomePage/city-homepage";
import ResourcePage from "./components/resources/ResourcePage";
// auth
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Profile from "./components/auth/Profile";

export const UserContext = createContext();

function App() {
  // auth middleware
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const isLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      console.log(token);
      if (token == null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      // route is working now
      const tokenResponse = await axios.post("/tokenIsValid", null, {
        headers: { "auth-token": token },
      });
      console.log(tokenResponse.data);
      if (tokenResponse.data) {
        const userResponse = await axios.get("/profile", {
          headers: { "auth-token": token },
        });
        console.log(tokenResponse.data);
        setUserData({
          token: token,
          user: userResponse.data,
        });
      }
    };
    isLoggedIn();
  }, []);

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
  };

  // event view useState
  const [eventView, setEventView] = useState([]);
  return (
    <div>
      <UserContext.Provider value={{ userData, setUserData }}>
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
        <Route exact path="/events/add" component={EventForm} />
        <Route exact path="/groups" component={Groups} />
        <Route
          path="/groups/:interest"
          render={(routerProps) => <Group match={routerProps.match} />}
        />

        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/resources" component={ResourcePage} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
