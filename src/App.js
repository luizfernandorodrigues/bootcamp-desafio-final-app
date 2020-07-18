import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import Totalizers from './components/Totalizers/Totalizers';
import NewAndFilter from './components/NewAndFilter/NewAndFilter';
import Values from './components/Values/Values';

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [allPeriods, setAllPeriods] = useState([]);
  const [currentPeriod, setCurrentPeriod] = useState([]);

  const handlePeriodChange = (newPeiod) => {
    setCurrentPeriod(newPeiod);
  };

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
      {!isModalOpen && (
        <Navigation
          allPeriods={allPeriods}
          selectedPeriod={currentPeriod}
          onChangePeriod={handlePeriodChange}
        />
      )}

      <Totalizers />
      <NewAndFilter />
      <Values />
    </div>
  );
}
