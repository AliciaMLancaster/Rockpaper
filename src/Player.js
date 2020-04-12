import React from 'react';
import rock from './rock.jpg';
import scissor from './scissors.jpg';
import paper from './paper.jpg';

const Player = (props) => {
  return (
    <div className="player">
      <img className="player-image" src={rock} alt="rock" />
    </div>
  );
};

export default Player;
