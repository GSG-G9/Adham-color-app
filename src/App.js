// import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Red from './components/Red'
import Blue from "./components/Blue";
import Green from './components/Green';
import Home from './components/Home';
import AddColor, {  } from "./components/AddColor";
function App() {
  return (
    <Router>
      <div style={{ backgroundColor: 'black', color: 'white' }}>
        <h3>Welcome to the color factory</h3>
        <Link to='/new'>
          <h4>Add color</h4>
        </Link>
        <Link to='/'>back to home</Link>
      </div>
      <div className="App">
        <h2>Please Select a color</h2>
        <ul>
          <li>
            <Link to='/red'> Red</Link>
          </li>
          <li>
            <Link to='/green'> Green</Link>
          </li>
          <li>
            <Link to='/blue'> Blue</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path='/red' component={Red}/>
        <Route path='/green' component={Green}/>
        <Route path='/blue' component={Blue}/>  
        <Route path='/new' component={AddColor}/>
        <Route path='/' component= {Home}/>
      </Switch>
      
    </Router>
  );
}

export default App;
