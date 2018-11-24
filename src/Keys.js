import React, { useContext } from 'react';
import { PlayContext, forgeKeyPressed } from './Playmat';
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
  const { dispatch, forgedKeys } = useContext(PlayContext);
  const forged = forgedKeys.indexOf(color) !== -1;
  return (
    <div
      onClick={() => dispatch(forgeKeyPressed(color))}
      className={`key${forged ? ' forged' : ''} ${color.toLowerCase()}`}
    />
  );
}
