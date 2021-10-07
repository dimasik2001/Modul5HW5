import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './components/myGameStyles.css';
import MyForm from './components/myform';
import MyGame from "./components/myGame.js";
import MyCars from "./components/mycars";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path ="/registration" component = {MyForm}></Route>
    <Route path ="/Game" component = {MyGame}></Route>
    <Route exact path = "/Cars" component = {MyCars}></Route>
    <Route path = "/Cars/:search" component = {MyCars}></Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
