import React, { useReducer } from 'react';
import produce from 'immer';
import Player from './Player';
import DMZ from './DMZ';

import './Playmat.css';

const KEY_COST = 6;

export const CHANGE_AMBER = 'CHANGE_AMBER';
export const FORGE_KEY_PRESSED = 'FORGE_KEY_PRESSED';
export const STEAL_PRESSED = 'STEAL_PRESSED';

export const changeAmber = amount => ({
  type: CHANGE_AMBER,
  payload: amount
});

export const forgeKeyPressed = color => ({
  type: FORGE_KEY_PRESSED,
  payload: color
});

export const stealPressed = {
  type: STEAL_PRESSED
};

const playReducer = produce((draft, action) => {
  const playerNumber = action.player;
  const player = draft[playerNumber];

  switch (action.type) {
    case STEAL_PRESSED:
      const otherPlayerNumber = playerNumber === 1 ? 0 : 1;
      console.log(`${playerNumber} stole from ${otherPlayerNumber}`);
      const otherPlayer = draft[otherPlayerNumber];
      if (otherPlayer.amber > 0) {
        player.amber += 1;
        otherPlayer.amber -= 1;
      }
      return;
    case CHANGE_AMBER:
      player.amber = Math.max(0, player.amber + action.payload);
      return;
    case FORGE_KEY_PRESSED:
      const color = action.payload;
      const alreadyForged = player.forgedKeys.indexOf(color);
      if (alreadyForged !== -1) {
        delete player.forgedKeys[alreadyForged];
        player.amber += KEY_COST;
      } else {
        if (player.amber < KEY_COST) {
          return;
        }
        player.amber -= KEY_COST;
        player.forgedKeys.push(color);
      }
      return;
  }
});

const DEFAULT_PLAYER_STATE = {
  amber: 0,
  forgedKeys: []
};

const DEFAULT_STATE = {
  0: DEFAULT_PLAYER_STATE,
  1: DEFAULT_PLAYER_STATE
};

export const PlayContext = React.createContext({
  dispatch: () => {},
  ...DEFAULT_STATE
});

export default function Playmat() {
  const [state, dispatch] = useReducer(playReducer, DEFAULT_STATE);
  return (
    <PlayContext.Provider value={{ dispatch, ...state }}>
      <Player reverse player={0} />
      <DMZ />
      <Player player={1} />
    </PlayContext.Provider>
  );
}
