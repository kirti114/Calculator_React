import Login from "./components/login/Login";
import Home from "./components/home/Home";
import { Router, Route, Switch } from 'react-router-dom';

function Nitssolutions(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login history={props.history} />
        </Route>
        <Route exact path="/home">
          <Home history={props.history} />
        </Route>
      </Switch>
    </div>
  );
}

export default Nitssolutions;
