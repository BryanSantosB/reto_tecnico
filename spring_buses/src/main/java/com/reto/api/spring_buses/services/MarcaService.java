package com.reto.api.spring_buses.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.reto.api.spring_buses.entities.Marca;
import com.reto.api.spring_buses.repositories.MarcaRepository;

@Service
public class MarcaService implements IMarcaService{

    private final MarcaRepository marcaRepository;

    public MarcaService(MarcaRepository marcaRepository){
        this .marcaRepository = marcaRepository;
    }

    @Override
    public Marca guardarMarca(Marca marca) {
        return marcaRepository.save(marca);
    }

    @Override
    public List<Marca> obtenerMarcas() {
        return marcaRepository.findAll();
    }

    @Override
    public boolean eliminarMarcaPorId(long id) {
        if (existeMarca(id)) {
            marcaRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public boolean existeMarca(long id) {
        return marcaRepository.existsById(id);
    }

    @Override
    public Marca obtenerMarcaPorId(long id) {
        return marcaRepository.findById(id).get();
    }



}
