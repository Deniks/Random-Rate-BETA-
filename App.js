import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import {Notification} from './components/notification';
import {UserInterface} from './components/ui';
import {Game} from './components/game';

class App extends Component {
  render() {
    return (

        <div className="App">
          <Notification />
          <UserInterface />
          <Game />
        </div>

    );
  }
}

export default App;
