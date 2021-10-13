import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    //BEM
    <Router>
      <Sidebar/>
      <Switch>
        <Navbar/>
      </Switch>
    </Router>
  );
}

export default App;
