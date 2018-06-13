import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Game} from './game';
export class UserInterface extends React.Component {
  newGame() {
    var ui = document.querySelector('.ui');
    ui.style.display = 'none';
  }

  render () {
    return (
      <Router >
        <div className="ui">
          <div className="ui-root">
/*LINK*/    <Link to="/new-game">
              <button className="game-start-btn start-btn start-btn_invisible" onClick={this.newGame}>New Game</button>
            </Link>
            <div className="setting-wrapper">
/*LINK*/      <Link to="/settings">
                <button className="settings start-btn">Settings</button>
              </Link>
                <div className="sub-menu-wrapper">
                  <button className="start-btn sub-menu">Share</button>
                  <button className="start-btn sub-menu">Leaderboard</button>
                </div>
            </div>
/*LINK*/    <Link to="/quit">
              <button className="exit start-btn start-btn_invisible">Exit</button>
            </Link>
          </div>
          <Route exact path="/new-game" component={Game} />

        </div>
      </Router>
    );
  }
}
