import React, { useState } from 'react';
import Stat from './Stat';

import './Chain.css';

function chainDraw(chainLevel) {
  // TODO: write this for real
  return Math.ceil(chainLevel / 6) * -1;
}

export default function Chain({ startingChain = 0 }) {
  const [chainLevel, setChain] = useState(startingChain);
  return (
    <section className="chain">
      <h3>Card Draw Modifier</h3>
      <Stat>{chainDraw(chainLevel)}</Stat>
      <h3>Chain Level</h3>
      <Stat>{chainLevel}</Stat>
      <div className="chain-button-container">
        <button
          className="chain-down"
          onClick={() => setChain(Math.max(0, chainLevel - 1))}
        >
          -
        </button>
        <button className="chain-up" onClick={() => setChain(chainLevel + 1)}>
          +
        </button>
      </div>
    </section>
  );
}
