import './App.css';
import EventForm from './components/EventForm';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to='/events/add'>
        <button>Add Event</button>
      </Link>
      <main>

      <Route path='/events/add' 
        component={EventForm} />
      </main>
    </div>
  );
}

export default App;