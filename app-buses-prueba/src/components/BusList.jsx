import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';

function BusList() {
  const [buses, setBuses] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBuses();
  }, [page]);

  const fetchBuses = async () => {
    setLoading(true);
    try {
      const data = await ApiService.getBuses(page);
      setBuses(data.content);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error al cargar los buses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="container my-4">
      <div className="card bg-dark text-light border-secondary shadow-lg">
        <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center border-secondary">
          <h2 className="card-title mb-0 fs-4">
            <i className="bi bi-bus-front me-2"></i>
            Lista de Buses
          </h2>
          <span className="badge bg-secondary text-light">
            Total: {buses.length}
          </span>
        </div>
        
        <div className="card-body p-0">
          {loading ? (
            <div className="d-flex justify-content-center p-5">
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          ) : (
            <>
              {buses.length === 0 ? (
                <div className="alert alert-secondary m-3 text-center">
                  No hay buses disponibles
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-dark table-hover table-striped border-secondary mb-0">
                    <thead className="table-dark border-secondary">
                      <tr>
                        <th scope="col" className="ps-4">Número</th>
                        <th scope="col">Placa</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Características</th>
                        <th scope="col" className="text-center">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {buses.map((bus) => (
                        <tr key={bus.id} className="border-secondary">
                          <td className="ps-4 fw-bold">{bus.numero}</td>
                          <td>{bus.placa}</td>
                          <td>{bus.marcaBus.nombreMarca}</td>
                          <td>
                            {bus.caracteristicas.split(',').map((caracteristica, index) => (
                              <span key={index} className="badge bg-secondary me-1 mb-1">
                                {caracteristica.trim()}
                              </span>
                            ))}
                          </td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-outline-info me-1" title="Ver detalles">
                              <i className="bi bi-eye"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-light me-1" title="Editar">
                              <i className="bi bi-pencil"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
        
        <div className="card-footer bg-dark d-flex justify-content-center border-secondary">
          <nav aria-label="Navegación de páginas">
            <ul className="pagination pagination-md mb-0">
              <li className={`page-item ${page === 0 ? 'disabled' : ''}`}>
                <button 
                  className="page-link bg-dark text-light border-secondary" 
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 0}
                >
                  &laquo;
                </button>
              </li>
              
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i} className={`page-item ${page === i ? 'active' : ''}`}>
                  <button 
                    className={`page-link border-secondary ${page === i ? 'bg-info text-dark' : 'bg-dark text-light'}`}
                    onClick={() => handlePageChange(i)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
              
              <li className={`page-item ${page === totalPages - 1 ? 'disabled' : ''}`}>
                <button 
                  className="page-link bg-dark text-light border-secondary" 
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages - 1}
                >
                  &raquo;
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default BusList;