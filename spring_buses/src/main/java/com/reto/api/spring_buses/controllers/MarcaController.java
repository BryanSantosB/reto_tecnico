package com.reto.api.spring_buses.controllers;

import com.reto.api.spring_buses.entities.Marca;
import com.reto.api.spring_buses.services.IMarcaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/marcas")
public class MarcaController {

    private final IMarcaService marcaService;

    public MarcaController(IMarcaService marcaService) {
        this.marcaService = marcaService;
    }

    @GetMapping
    public List<Marca> listarMarcas() {
        return marcaService.obtenerMarcas();
    }

    @PostMapping("/crear")
    public ResponseEntity<Object> crearMarca(@RequestBody Marca marca) {
        try {
            if (marcaService.guardarMarca(marca) != null) {
                return ResponseEntity.status(HttpStatus.CREATED).body("La marca se registró correctamente");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al registrar la marca");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al registrar la marca: " + e.getMessage());
        }
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Object> buscarMarca(@PathVariable Long id) {
        try {
            Marca marca = marcaService.obtenerMarcaPorId(id);
            return ResponseEntity.ok(marca);
        } catch (NoSuchElementException e) {
            String mensaje = "Marca no encontrada con ID: " + id;
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(mensaje);
        } catch (Exception e) {
            String mensaje = "Error al buscar la marca: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(mensaje);
        }
    }

    @PutMapping("/actualizar/{id}")
    public ResponseEntity<Object> actualizarMarca(@PathVariable Long id, @RequestBody Marca marca) {
        try {
            if (!id.equals(marca.getId())) {
                return ResponseEntity.badRequest().body("El ID de la URL no coincide con el ID de la marca en el cuerpo.");
            }
            Marca marcaActualizada = marcaService.guardarMarca(marca);
            return ResponseEntity.ok(marcaActualizada);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al actualizar la marca: " + e.getMessage());
        }
    }
}