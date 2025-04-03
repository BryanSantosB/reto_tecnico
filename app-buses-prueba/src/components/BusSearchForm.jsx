import React, { useState } from 'react';
import ApiService from './ApiService';

function BusSearchForm({ onSearch }) {
  const [busId, setBusId] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const bus = await ApiService.getBusById(busId);
      onSearch(bus);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="number"
          className="form-control bg-dark text-light border-secondary"
          placeholder="ID del bus"
          value={busId}
          onChange={(e) => setBusId(e.target.value)}
        />
        <button className="btn btn-outline-info" type="submit">
          Buscar
        </button>
      </div>
      {error && <div className="alert alert-danger mt-2">{error}</div>}
    </form>
  );
}

export default BusSearchForm;