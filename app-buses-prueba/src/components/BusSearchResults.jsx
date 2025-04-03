import React from 'react';

function BusSearchResults({ bus }) {
  return (
    <div>
      <h3>Resultado de la Búsqueda</h3>
      <table className="table table-dark table-striped border-secondary">
        <tbody>
          <tr>
            <td>Número</td>
            <td>{bus.numero}</td>
          </tr>
          <tr>
            <td>Placa</td>
            <td>{bus.placa}</td>
          </tr>
          <tr>
            <td>Marca</td>
            <td>{bus.marcaBus.nombreMarca}</td>
          </tr>
          <tr>
            <td>Características</td>
            <td>{bus.caracteristicas}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BusSearchResults;