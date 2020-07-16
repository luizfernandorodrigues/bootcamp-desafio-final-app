import React from 'react';

export default function NewAndFilter() {
  return (
    <div
      style={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <button class="waves-effect waves-light btn">+ Novo lançamento</button>
      <div
        class="input-field"
        style={{ marginLeft: '10px', display: 'flex', flex: '1 1 0%' }}
      >
        <input placeholder="Filtro" type="text" value="" />
      </div>
    </div>
  );
}
