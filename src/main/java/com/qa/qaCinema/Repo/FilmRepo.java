package com.qa.qaCinema.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmRepo extends JpaRepository<Film, Long>{

	@Query(value = "SELECT * FROM Film", nativeQuery = true) 
	public List<Film> allFromCat();
	
	@Query(value = "SELECT * FROM cat WHERE Film_Name = ?1", nativeQuery = true) 
	public List<Film> sameNameSelect(String Film_Name);

}

}
