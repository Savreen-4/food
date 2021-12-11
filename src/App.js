import logo from './logo.svg';
import './App.css';
import Routes from "./Routes"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Form from './Components/Food'
import Second from './Components/Next';
import First from './Components/Food';

function App() {
  return (
   <div>
     <Routes/>
   </div>
  );
}

export default App;
