import React from 'react';
import Playmat from './Playmat';

export default function GameBoard() {
  return (
    <div className="game-board">
      <Playmat reverse /> <hr /> <Playmat />
    </div>
  );
}
