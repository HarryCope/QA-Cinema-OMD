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
	public Film readFilm(Long Film_ID) {
		return repo.findById(Film_ID).get();
	}
	
	public List<Film> readAllFilms() {
		return this.repo.findAll();
	}
	
	//Update
	public Film updateFilm(Film updateFilm, Long Film_ID) {
		
		Optional<Film> currentFilm = this.repo.findById(Film_ID);
	
		if (currentFilm.get() instanceof Film) {
			Film oldFilm = currentFilm.get();
			
			oldFilm.setFilm_Name(updateFilm.getFilm_Name());
			oldFilm.setFilm_ID(updateFilm.getFilm_ID());
			oldFilm.setRating(updateFilm.getRating());
			oldFilm.setRelease_Date(updateFilm.getRelease_Date());
			oldFilm.setAge_Rating(updateFilm.getAge_Rating());
			oldFilm.setSynopsis(updateFilm.getSynopsis());
			oldFilm.setCast(updateFilm.getCast());
			oldFilm.setDirectors(updateFilm.getDirectors());
			
			return repo.save(oldFilm);
		}
		
		// else {throw ...}
		return null;	
	}
	
	//Delete
	public boolean deleteByFilmID(Long Film_ID) {
		Optional<Film> currentFilm = this.repo.findById(Film_ID);
		
		//Ternary Statement we need to ensure we use it within a variable
		
		boolean isPresent = (currentFilm.isPresent()) ?  true : false;
		
		if (isPresent) {
			this.repo.deleteById(Film_ID);
			return true;
		} else {
//			throw new Exception();
			return false;
		}
	}
}

	
	
}
