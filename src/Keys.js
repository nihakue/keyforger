import React, { useState } from 'react';
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
  const [forged, setForged] = useState(false);
  return (
    <div
      onClick={() => setForged(!forged)}
      className={`key${forged ? ' forged' : ''} ${color.toLowerCase()}`}
    />
  );
}
