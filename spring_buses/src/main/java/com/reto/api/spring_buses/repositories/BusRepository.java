package com.reto.api.spring_buses.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.NonNull;

import com.reto.api.spring_buses.entities.Bus;

public interface BusRepository extends JpaRepository<Bus, Long>{

    List<Bus> findByEstadoTrue();

    Optional<Bus> findByPlaca(String placa);

    List<Bus> findByMarcaBus_Id(long id);

    @NonNull
    Page<Bus> findAll(@NonNull Pageable pageable);
}
