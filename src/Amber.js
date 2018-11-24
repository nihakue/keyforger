import React, { useContext } from 'react';
import Stat from './Stat';
import { PlayContext, changeAmber } from './Playmat';
import './Amber.css';

export default function Amber() {
  const playState = useContext(PlayContext);
  const { amber, dispatch } = playState;
  return (
    <section className="amber">
      <h2>Amber</h2>
      <Stat>{amber}</Stat>
      <div className="amber-button-container">
        <button onClick={() => dispatch(changeAmber(-1))}>-</button>
        <button onClick={() => dispatch(changeAmber(1))}>+</button>
      </div>
    </section>
  );
}
