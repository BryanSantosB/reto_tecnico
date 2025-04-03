package com.reto.api.spring_buses.services;

import java.util.List;

import com.reto.api.spring_buses.entities.Marca;

import jakarta.transaction.Transactional;

public interface IMarcaService {

    public Marca guardarMarca(Marca bus);

    public List<Marca> obtenerMarcas();

    public Marca obtenerMarcaPorId(long id);

    @Transactional
    public boolean eliminarMarcaPorId(long id);

    public boolean existeMarca(long id);

}
