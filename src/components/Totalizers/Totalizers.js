import React from 'react';

export default function Totalizers() {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5px',
        margin: '10px',
        border: '1px solid lightgrey',
        borderRadius: '4px',
      }}
    >
      <span>
        <strong>Lançamentos: </strong>1
      </span>
      <span>
        <strong>
          Receitas:{' '}
          <span style={{ color: 'rgb(22, 160, 133)' }}>R$&nbsp;0,00</span>
        </strong>
      </span>
      <span>
        <strong>
          Despesas:{' '}
          <span style={{ color: 'rgb(192, 57, 43)' }}>R$&nbsp;0,00</span>
        </strong>
      </span>
      <span>
        <strong>
          Saldo:{' '}
          <span style={{ color: 'rgb(192, 57, 43)' }}>-R$&nbsp;0,00</span>
        </strong>
      </span>
    </div>
  );
}
