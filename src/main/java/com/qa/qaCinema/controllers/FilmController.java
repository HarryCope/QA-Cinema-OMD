package com.qa.qaCinema.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/Film")
public class FilmController {
	
	@Autowired
	FilmService service;
	
	public FilmController(FilmService service) {
		this.service = service;
	}

	@GetMapping("/getFilm")
	public ResponseEntity <List<Film>> getFilm() {
		List<Film> filmData = service.readAllFilm();
		return new ResponseEntity<List<Film>>(filmData, HttpStatus.OK);
	}
	
	@PostMapping("/createFilm")
	public ResponseEntity<Film> createFilm(@RequestBody Film film) {
		Film createFilm = service.createFilm(film);
		return new ResponseEntity<Film>(createFilm, HttpStatus.CREATED);
	}
	
	@PutMapping("/updateFilm/{film_Id}")
	public ResponseEntity<Film> updateFilm(@RequestBody Film film, @PathVariable Long filmId) {
		Film updateFilm = service.updateFilm(film, filmId);
		return new ResponseEntity<Film>(updateFilm, HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteFilm/{film_Id}")
	public ResponseEntity<Boolean> deleteFilm(@PathVariable Long filmId) {
		Boolean deletedFilm = service.deleteFilm(filmId);
		return new ResponseEntity<Boolean>(deletedFilm, HttpStatus.NO_CONTENT);
	}
}
