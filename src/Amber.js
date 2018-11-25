import React, { useContext } from 'react';
import Stat from './Stat';
import { PlayContext, changeAmber } from './Playmat';
import './Amber.css';

const KEY_COST = 6;

export default function Amber() {
  const playState = useContext(PlayContext);
  const { amber, dispatch } = playState;
  const ready = amber >= KEY_COST;
  return (
    <section className={`amber${ready ? ' ready' : ''}`}>
      <button onClick={() => dispatch(changeAmber(-1))}>-</button>
      <Stat>{amber}</Stat>
      <button onClick={() => dispatch(changeAmber(1))}>+</button>
    </section>
  );
}
