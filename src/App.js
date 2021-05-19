import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './modules/Home'
import HomePolice from './modules/Police/HomePolice'
import HomeDriver from './modules/Driver/HomeDriver'
import LoginD from "./componets/LoginD";
import LoginP from "./componets/LoginP";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/HomePolice'}  component={HomePolice}/>
          <Route path={'/HomeDriver'} component={HomeDriver}/>
          <Route path={'/Login'} component={LoginD}/>
          <Route path={'/LoginP'} component={LoginP}/>
          {/*<Route path={'/LoginDriver'} component={LoginDriver}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
