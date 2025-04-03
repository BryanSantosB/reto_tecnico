package com.reto.api.spring_buses.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.reto.api.spring_buses.entities.Bus;
import com.reto.api.spring_buses.services.IBusService;

import java.util.NoSuchElementException;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/buses")
public class BusController {

    private final IBusService busService;

    public BusController(IBusService busService){
        this.busService = busService;
    }

    @GetMapping
    public Page<Bus> listar(
        @RequestParam (defaultValue = "0") int page, 
        @RequestParam(defaultValue = "10") int size) {
        return busService.obtenerBuses(page, size);
    }

    @PostMapping("/crear")
    public ResponseEntity<Object> crearBus(@RequestBody Bus bus) {
        try {
            if(busService.guardarBus(bus) != null){
                return ResponseEntity.status(HttpStatus.CREATED)
                                    .body("El bus se registró correctamente");
            }else{
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                    .body("Error al registrar el bus");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                .body("Error al registrar el bus" + e.getMessage());
        }
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Object> buscarBus(@PathVariable Long id) {
        try {
            Bus bus = busService.obtenerBusPorId(id).get();
            return ResponseEntity.ok(bus);
        } catch (NoSuchElementException e) {
            String mensaje = "Bus no encontrado con ID: " + id;
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(mensaje);
        } catch (Exception e) {
            String mensaje = "Error al buscar el bus: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(mensaje);
        }
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<Object> actualizar(@PathVariable Long id, @RequestBody Bus bus) {
        try {
            if (!id.equals(bus.getId())) {
                return ResponseEntity.badRequest().body("El ID de la URL no coincide con el ID del bus en el cuerpo.");
            }
            Bus busActualizado = busService.guardarBus(bus);
            return ResponseEntity.ok(busActualizado);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al actualizar el bus: " + e.getMessage());
        }
    }

}
