import React, { useContext } from 'react';
import Chain from './Chain';
import Keys, { KeyCostControls } from './Keys';
import Amber, { AmberControls } from './Amber';
import Steal from './Steal';
import { PlayContext } from './Playmat';

export default function Player({ reverse = false, player }) {
  const { dispatch, singlePlayerMode, ...state } = useContext(PlayContext);
  const playerDispatch = action => dispatch({ ...action, player });

  return (
    <section className={`playmat${reverse ? ' reverse' : ''}`}>
      <PlayContext.Provider
        value={{ dispatch: playerDispatch, singlePlayerMode, ...state[player] }}
      >
        <Keys />
        <Steal />
        <section style={{ display: 'flex' }}>
          <AmberControls />
          <Amber />
          <KeyCostControls />
        </section>
        <Chain />
      </PlayContext.Provider>
    </section>
  );
}
