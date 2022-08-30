package com.qa.qaCinema.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.qa.qaCinema.models.Film;

@Repository
public interface FilmRepo extends JpaRepository<Film, Long>{

	@Query(value = "SELECT * FROM Film", nativeQuery = true) 
	public List<Film> allFromFilm();
	
	@Query(value = "SELECT * FROM film WHERE Film_Name = ?1", nativeQuery = true) 
	public List<Film> sameNameSelect(String filmName);

}

