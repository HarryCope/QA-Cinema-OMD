package com.qa.qaCinema.Services;

import org.springframework.stereotype.Service;

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
			
			oldFilm.setfilmName(updateFilm.getfilmName());
			oldFilm.setfilm_Id(updateFilm.getfilm_Id());
			oldFilm.setfilmRating(updateFilm.getfilmRating());
			oldFilm.setfilmReleaseDate(updateFilm.getfilmReleaseDate());
			oldFilm.setfilmAgeRating(updateFilm.getfilmAgeRating());
			oldFilm.setfilmSynopsis(updateFilm.getfilmSynopsis());
			oldFilm.setfilmCast(updateFilm.getfilmCast());
			oldFilm.setfilmDirectors(updateFilm.getfilmDirectors());
			oldFilm.setfilmGenres(updateFilm.getfilmGenres());
			
			return repo.save(oldFilm);
		}
		
		// else {throw ...}
		return null;	
	}
	
	//Delete
	public boolean deleteByFilmID(Long film_Id) {
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

	
	
}
