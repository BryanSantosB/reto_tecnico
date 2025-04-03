import React, { useState } from "react";
import ApiService from "./ApiService";

function BusForm({ onBusCreated }) {
  const [numero, setNumero] = useState("");
  const [placa, setPlaca] = useState("");
  const [caracteristicas, setCaracteristicas] = useState("");
  const [marcaBusId, setMarcaBusId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await ApiService.createBus({
        numero,
        placa,
        caracteristicas,
        marcaBus: { id: marcaBusId },
      });

      onBusCreated();
      // Limpiar el formulario
      setNumero("");
      setPlaca("");
      setCaracteristicas("");
      setMarcaBusId("");
    } catch (err) {
      setError("Error al crear el bus. Por favor intente nuevamente.");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <div className="card bg-dark text-light border-secondary shadow-lg mb-4">
        <div className="card-header bg-dark text-white d-flex align-items-center border-secondary">
          <h2 className="card-title mb-0 fs-4">
            <i className="bi bi-plus-circle me-2"></i>
            Crear Bus
          </h2>
        </div>

        <div className="card-body">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control bg-dark text-light border-secondary"
                    id="numeroInput"
                    placeholder="Número"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    required
                  />
                  <label htmlFor="numeroInput" className="text-secondary">
                    Número
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control bg-dark text-light border-secondary"
                    id="placaInput"
                    placeholder="Placa"
                    value={placa}
                    onChange={(e) => setPlaca(e.target.value)}
                    required
                  />
                  <label htmlFor="placaInput" className="text-secondary">
                    Placa
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control bg-dark text-light border-secondary"
                    id="marcaInput"
                    placeholder="ID de Marca"
                    value={marcaBusId}
                    onChange={(e) => setMarcaBusId(e.target.value)}
                    required
                  />
                  <label htmlFor="marcaInput" className="text-secondary">
                    ID de Marca
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control bg-dark text-light border-secondary"
                    id="caracteristicasInput"
                    placeholder="Características"
                    value={caracteristicas}
                    onChange={(e) => setCaracteristicas(e.target.value)}
                    style={{ height: "100px" }}
                  ></textarea>
                  <label
                    htmlFor="caracteristicasInput"
                    className="text-secondary"
                  >
                    Características (separadas por coma)
                  </label>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
              <button
                type="button"
                className="btn btn-outline-secondary me-2"
                onClick={() => {
                  setNumero("");
                  setPlaca("");
                  setCaracteristicas("");
                  setMarcaBusId("");
                }}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn btn-info"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Creando...
                  </>
                ) : (
                  <>
                    <i className="bi bi-save me-2"></i>
                    Crear Bus
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BusForm;
