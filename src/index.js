import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';

import './index.css';

const weapons = ['rock', 'paper', 'scissor'];

class App extends React.Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: '',
  };

  /*startGame = () => {
    let count = 0;
    let gameInterval = setInterval(() => {
      count++;
      this.setState({
        playerTwo: weapons(Math.floor(Math.random() * weapons.length)), winner: ""
      })
      if(count > 5) {
        clearInterval(gameInterval);
         this.setState({
          winner: this.selectWinner()
        })
      }
    }, 100)
  }

  selectWinner = () => { 
    const {playerOne, playerTwo} = this.state;
    if (playerOne === playerTwo) {
      return "Oh no it's a tie"
    } else if (
    (playerOne === "rock" && playerTwo === "scissor") || 
    (playerOne == "scissor" && playerTwo === "paper") || 
    (playerOne == "paper" && playerTwo === "rock")
    ) { 
      return "Player One Wins";
  } else {
    return "Player Two Wins";
  }
};*/

  render() {
    return (
      <div>
        <h1>Rock Paper Scissors</h1>
        <div>
          <Player />
          <Player />
        </div>
        <div>
          <button className="weaponBtn">rock</button>
          <button className="weaponBtn">paper</button>{' '}
          <button className="weaponBtn">scissor</button>
        </div>
        <div className="winner">winner</div>
        <button type="button">Start</button>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
