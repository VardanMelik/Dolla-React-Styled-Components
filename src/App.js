import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    //BEM
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
