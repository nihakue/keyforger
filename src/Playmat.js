import React from 'react';
import Chain from './Chain';
import Keys from './Keys';
import Amber from './Amber';
import './Playmat.css';

export default function Playmat({ reverse = false }) {
  return (
    <section className={`playmat${reverse ? ' reverse' : ''}`}>
      <Chain />
      <Amber />
      <Keys />
    </section>
  );
}
