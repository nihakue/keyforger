import React from 'react';
import Playmat from './Playmat';
import useFocusTrick from './useFocusTrick';
import './GameBoard.css';

export default function GameBoard() {
  const userIsTabbing = useFocusTrick();
  return (
    <div className={`game-board${userIsTabbing ? ' tab-user' : ''}`}>
      <Playmat />
    </div>
  );
}
