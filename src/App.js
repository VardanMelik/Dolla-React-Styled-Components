import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    //BEM
    <Router>
      <Switch>
        <Navbar/>
      </Switch>
    </Router>
  );
}

export default App;
