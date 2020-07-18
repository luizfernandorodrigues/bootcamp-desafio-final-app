import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import Totalizers from './components/Totalizers/Totalizers';
import NewAndFilter from './components/NewAndFilter/NewAndFilter';
import Values from './components/Values/Values';
import * as api from './api/apiService';

function sortTransactions(transactions) {
  return transactions.sort((a, b) =>
    a.yearMonthDay.localeCompare(b.yearMonthDay)
  );
}

function getCurrentPeriod(allPeriods) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const yearMonth = `${year}-${month.toString().padStart(2, '0')}`;
  const currentPeriod = allPeriods.find(({ id }) => id === yearMonth);

  return currentPeriod || Object.assign({}, allPeriods[0]);
}

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [allPeriods, setAllPeriods] = useState([]);
  const [currentPeriod, setCurrentPeriod] = useState([]);
  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [sumary, setSumary] = useState(null);

  //carrega os periodos da api
  useEffect(() => {
    const getAllPeriods = async () => {
      const data = await api.getAllPeriods();
      setAllPeriods(data);

      setCurrentPeriod(getCurrentPeriod(data));
    };

    getAllPeriods();
  }, []);

  //seta o periodo corrente
  useEffect(() => {
    const fetchData = async () => {
      if (!currentPeriod) {
        return;
      }

      setCurrentTransactions([]);
      const transactions = await api.getTransactionsFrom(currentPeriod);
      setCurrentTransactions(transactions);
    };
    fetchData();
  }, [currentPeriod]);

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
