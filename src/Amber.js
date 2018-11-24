import React, { useState } from 'react';
import Stat from './Stat';
import './Amber.css';

export default function Amber() {
  const [amber, setAmber] = useState(0);

  return (
    <section className="amber">
      <h2>Amber</h2>
      <Stat>{amber}</Stat>
      <div className="amber-button-container">
        <button onClick={() => setAmber(Math.max(0, amber - 1))}>-</button>
        <button onClick={() => setAmber(amber + 1)}>+</button>
      </div>
    </section>
  );
}
