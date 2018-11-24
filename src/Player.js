import React, { useContext } from 'react';
import Chain from './Chain';
import Keys from './Keys';
import Amber from './Amber';
import Steal from './Steal';
import { PlayContext } from './Playmat';

export default function Player({ reverse = false, player }) {
  const { dispatch, ...state } = useContext(PlayContext);
  const playerDispatch = action => dispatch({ ...action, player });

  return (
    <section className={`playmat${reverse ? ' reverse' : ''}`}>
      <PlayContext.Provider
        value={{ dispatch: playerDispatch, ...state[player] }}
      >
        <Steal />
        <Amber />
        <Keys />
        <Chain />
      </PlayContext.Provider>
    </section>
  );
}
