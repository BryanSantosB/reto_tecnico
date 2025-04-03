import React, { useState } from 'react';
import BusSearchForm from './BusSearchForm';
import BusSearchResults from './BusSearchResults';

function BusSearch() {
  const [bus, setBus] = useState(null);

  const handleSearch = (busData) => {
    setBus(busData);
  };

  return (
    <div className="container my-4">
      <div className="card bg-dark text-light border-secondary shadow-lg">
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center border-secondary">
          <h2 className="card-title mb-0 fs-4">
            <i className="bi bi-search me-2"></i>
            Buscar Bus
          </h2>
        </div>
        <div className="card-body">
          <BusSearchForm onSearch={handleSearch} />
          {bus && <BusSearchResults bus={bus} />}
        </div>
      </div>
    </div>
  );
}

export default BusSearch;