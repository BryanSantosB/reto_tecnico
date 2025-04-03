package com.reto.api.spring_buses.services;

import java.util.Optional;

import org.springframework.data.domain.Page;

import com.reto.api.spring_buses.entities.Bus;

import jakarta.transaction.Transactional;

public interface IBusService {

    public Bus guardarBus(Bus bus);

    public Page<Bus> obtenerBuses(int page, int size);

    public Optional<Bus> obtenerBusPorId(long id);

    public Optional<Bus> obtenerBusPorPlaca(String placa);

    @Transactional
    public boolean eliminarBusPorId(long id);

    public boolean existeBus(long id);
}
