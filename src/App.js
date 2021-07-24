import './App.css';
import EventForm from './components/events/EventForm.jsx';
import { Route, Link } from "react-router-dom";
import Groups from './components/groups/Groups';
import Group from './components/groups/Group';


function App() {
  return (
    <div className="App">
      <Link to='/events/add'>
        <h1>Add Event</h1>
      </Link>
      <main>
        <Route exact path='/events/add'
        component={EventForm}/>
        <Route exact path='/groups' component={Groups} />
        <Route exact path='/group' component={Group} />
      </main>    
        </div>
  );
}

export default App;