import './App.css';
import EventForm from './components/events/EventForm.jsx';
import { Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Link to='/events/add'>
        <h1>click</h1>
      </Link>
      <main>
        <Route path='/events/add'
        component={EventForm}/>
        </main>    
        </div>
  );
}

export default App;