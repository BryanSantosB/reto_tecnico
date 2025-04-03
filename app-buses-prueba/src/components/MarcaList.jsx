import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';

function MarcaList() {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    ApiService.getMarcas().then((data) => setMarcas(data));
  }, []);

  return (
    <div>
      <h2>Lista de Marcas</h2>
      <ul>
        {marcas.map((marca) => (
          <li key={marca.id}>{marca.nombreMarca}</li>
        ))}
      </ul>
    </div>
  );
}

export default MarcaList;