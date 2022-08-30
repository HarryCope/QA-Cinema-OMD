package com.qa.qaCinema.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.qaCinema.Repo.FilmRepo;
import com.qa.qaCinema.models.Film;

@Service
public class FilmService {

//CRUD
	@Autowired
	private FilmRepo repo;
	
	@Autowired
	public FilmService(FilmRepo repo) {
		this.repo = repo;
	}
	
	//Create 
	public Film addFilm(Film film) {
		return repo.save(film);
	}
	
	//Read
	public Film readFilm(Long film_Id) {
		return repo.findById(film_Id).get();
	}
	
	public List<Film> readAllFilms() {
		return this.repo.findAll();
	}
	
	//Update
	public Film updateFilm(Film updateFilm, Long film_Id) {
		
		Optional<Film> currentFilm = this.repo.findById(film_Id);
	
		if (currentFilm.get() instanceof Film) {
			Film oldFilm = currentFilm.get();
			
			oldFilm.setFilmName(updateFilm.getFilmName());
			oldFilm.setFilm_Id(updateFilm.getFilm_Id());
			oldFilm.setFilmRating(updateFilm.getFilmRating());
			oldFilm.setFilmReleaseDate(updateFilm.getFilmReleaseDate());
			oldFilm.setFilmAgeRating(updateFilm.getFilmAgeRating());
			oldFilm.setFilmSynopsis(updateFilm.getFilmSynopsis());
			oldFilm.setFilmCast(updateFilm.getFilmCast());
			oldFilm.setFilmDirectors(updateFilm.getFilmDirectors());
			oldFilm.setFilmGenres(updateFilm.getFilmGenres());
			
			return repo.save(oldFilm);
		}
		
		// else {throw ...}
		return null;	
	}
	
	//Delete
	public boolean deleteByFilmId(Long film_Id) {
		Optional<Film> currentFilm = this.repo.findById(film_Id);
		
		//Ternary Statement we need to ensure we use it within a variable
		
		boolean isPresent = (currentFilm.isPresent()) ?  true : false;
		
		if (isPresent) {
			this.repo.deleteById(film_Id);
			return true;
		} else {
//			throw new Exception();
			return false;
		}
	}
}


