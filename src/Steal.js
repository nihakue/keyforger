import React, { useContext } from 'react';
import { PlayContext, stealPressed } from './Playmat';

import './Steal.css';

export default function Steal() {
  const { dispatch } = useContext(PlayContext);

  return (
    <section className="steal">
      <button onClick={() => dispatch(stealPressed)}>⬇Steal⬇</button>
    </section>
  );
}
