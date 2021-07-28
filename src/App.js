import "./App.css";
import Header from "./components/header/header";
import EventsList from "./components/events-group/events-list/events-list";
import { Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      <Route path="/events" component={EventsList} />
 
    </div>
  );
}

export default App;
