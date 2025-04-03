import React, { useState } from 'react';
import ApiService from './ApiService';

function MarcaForm({ onMarcaCreated }) {
  const [nombreMarca, setNombreMarca] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiService.createMarca({ nombreMarca }).then(() => {
      onMarcaCreated();
      setNombreMarca('');
    });
  };

  return (
    <div>
      <h2>Crear Marca</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre de Marca" value={nombreMarca} onChange={(e) => setNombreMarca(e.target.value)} />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default MarcaForm;