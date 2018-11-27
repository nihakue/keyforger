import React, { useContext } from 'react';
import { PlayContext, forgeKeyPressed, changeKeyCost } from './Playmat';
import './Keys.css';

const KEY_COLORS = Object.freeze({
  BLUE: 'BLUE',
  GREEN: 'GREEN',
  RED: 'RED'
});

export default function Keys() {
  return (
    <section className="keys">
      {Object.keys(KEY_COLORS).map(k => (
        <Key id={k} color={k} />
      ))}
    </section>
  );
}

function Key({ color }) {
  const { dispatch, amber, forgedKeys, keyCost } = useContext(PlayContext);
  const forged = forgedKeys.indexOf(color) !== -1;
  const ready = !forged && amber >= keyCost;
  return (
    <div
      onClick={() => dispatch(forgeKeyPressed(color))}
      className={`key${ready ? ' ready' : ''}${
        forged ? ' forged' : ''
      } ${color.toLowerCase()}`}
    />
  );
}

export function KeyCostControls() {
  const { dispatch } = useContext(PlayContext);
  return (
    <section className="key-cost-controls">
      <button onClick={() => dispatch(changeKeyCost(-1))}>-</button>
      <button onClick={() => dispatch(changeKeyCost(1))}>+</button>
    </section>
  );
}
