import React from 'react';
import css from './navigation.module.css';

export default function Navigation() {
  return (
    <div className={css.divMain}>
      <button className={css.button}> {'<'} </button>
      <select className={css.select}></select>
      <button className={css.button}>{'>'}</button>
    </div>
  );
}
