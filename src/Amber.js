import React, { useContext } from 'react';
import Stat from './Stat';
import { PlayContext, changeAmber } from './Playmat';
import './Amber.css';

export default function Amber() {
  const playState = useContext(PlayContext);
  const { amber, dispatch } = playState;
  return (
    <section className="amber">
      <button onClick={() => dispatch(changeAmber(-1))}>-</button>
      <Stat>{amber}</Stat>
      <button onClick={() => dispatch(changeAmber(1))}>+</button>
    </section>
  );
}
