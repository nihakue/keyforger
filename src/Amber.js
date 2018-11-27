import React, { useContext } from 'react';
import Stat from './Stat';
import { PlayContext, changeAmber } from './Playmat';
import './Amber.css';

export default function Amber() {
  const playState = useContext(PlayContext);
  const { amber, keyCost } = playState;
  return (
    <section className="amber">
      <Stat>{`${amber} / ${keyCost}`}</Stat>
    </section>
  );
}

export function AmberControls() {
  const { dispatch } = useContext(PlayContext);
  return (
    <section className="amber-controls">
      <button onClick={() => dispatch(changeAmber(-1))}>-</button>
      <button onClick={() => dispatch(changeAmber(1))}>+</button>
    </section>
  );
}
