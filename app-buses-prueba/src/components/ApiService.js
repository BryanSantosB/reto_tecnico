const API_URL = 'http://localhost:8080';

const ApiService = {
  getBuses: async (page = 0, size = 8) => {
    const response = await fetch(`${API_URL}/buses?page=${page}&size=${size}`);
    return response.json();
  },

  createBus: async (bus) => {
    const response = await fetch(`${API_URL}/buses/crear`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bus),
    });
    return response.json();
  },

  updateBus: async (id, bus) => {
    const response = await fetch(`${API_URL}/buses/actualizar/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bus),
    });
    return response.json();
  },

  getBusById: async (id) => {
    const response = await fetch(`${API_URL}/buses/buscar/${id}`);
    if (!response.ok) {
      throw new Error('Error al buscar el bus');
    }
    return response.json();
  },

  getMarcas: async () => {
    const response = await fetch(`${API_URL}/marcas`);
    return response.json();
  },

  createMarca: async (marca) => {
    const response = await fetch(`${API_URL}/marcas/crear`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(marca),
    });
    return response.json();
  },

  updateMarca: async (id, marca) => {
    const response = await fetch(`${API_URL}/marcas/actualizar/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(marca),
    });
    return response.json();
  },
};

export default ApiService;