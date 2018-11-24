import React from 'react';
import Chain from './Chain';
import Keys from './Keys';
import Amber from './Amber';
import './Playmat.css';

export default function Playmat() {
  return (<section className="playmat">
    <Chain />
    <Amber />
    <Keys />
  </section>)
}
