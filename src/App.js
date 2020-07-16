import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Totalizers from './components/Totalizers/Totalizers';
import NewAndFilter from './components/NewAndFilter/NewAndFilter';
import Values from './components/Values/Values';

export default function App() {
  return (
    <div className="container">
      <div className="center">
        <h1 style={{ fontSize: '2rem', fontWeight: '700' }}>
          Bootcamp Full Stack - Desafio Final
        </h1>
        <h2 style={{ fontSize: '1.8rem' }}>
          Bootcamp Full Stack - Desafio Final
        </h2>
      </div>
      <Navigation />
      <Totalizers />
      <NewAndFilter />
      <Values />
    </div>
  );
}
