import React from 'react';

export default function Values() {
  return (
    <div class="center" style={{ padding: '5px' }}>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          alignItems: 'center',
          justifyContent: 'flex-start',
          border: '1px solid transparent',
          borderRadius: '4px',
          padding: '5px',
          margin: '20px 5px 5px',
          backgroundColor: 'rgb(240, 161, 168)',
        }}
      >
        <span
          style={{
            marginRight: '20px',
            fontFamily: 'Consolas, monospace',
            fontWeight: 'bold',
            fontSize: '1.5rem',
          }}
        >
          15
        </span>
        <div
          style={{
            display: 'flex',
            flex: '7 1 0%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
              Teste
            </span>
            <span style={{ fontSize: '1.1rem' }}>Despesas</span>
          </div>
          <span
            style={{
              textAlign: 'right',
              fontFamily: 'Consolas, monospace',
              fontSize: '1.8rem',
            }}
          >
            R$&nbsp;45,00
          </span>
        </div>
        <div
          style={{
            marginLeft: '10px',
            display: 'flex',
            flex: '1 1 0%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <span
            class="material-icons"
            style={{
              fontSize: '1.2rem',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            edit
          </span>
          <span
            class="material-icons"
            style={{
              fontSize: '1.2rem',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
}
