package com.reto.api.spring_buses.services;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.reto.api.spring_buses.entities.Bus;
import com.reto.api.spring_buses.repositories.BusRepository;

import jakarta.transaction.Transactional;

@Service
public class BusService implements IBusService{

    private final BusRepository busRepository;

    public BusService(BusRepository busRepository) {
        this.busRepository = busRepository;
    }

    @Override
    public Bus guardarBus(Bus bus) {
        return busRepository.save(bus);
    }

    @Override
    public Page<Bus> obtenerBuses(int page, int size) {
        return busRepository.findAll(PageRequest.of(page, size));
    }

    @Override
    public Optional<Bus> obtenerBusPorId(long id) {
        return busRepository.findById(id);
    }

    @Override
    public Optional<Bus> obtenerBusPorPlaca(String placa) {
        return busRepository.findByPlaca(placa);
    }

    @Override
    @Transactional
    public boolean eliminarBusPorId(long id) {
        if (existeBus(id)) {
            busRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public boolean existeBus(long id) {
        return busRepository.existsById(id);
    }
}

