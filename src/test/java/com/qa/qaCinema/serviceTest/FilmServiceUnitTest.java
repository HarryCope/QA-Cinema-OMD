package com.qa.qaCinema.serviceTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.stereotype.Service;
import com.qa.qaCinema.Repo.FilmRepo;
import com.qa.qaCinema.Services.FilmService;
import com.qa.qaCinema.models.Film;

@SpringBootTest(webEnvironment = WebEnvironment.MOCK)
@Service
public class FilmServiceUnitTest {
	
	@Autowired
	private FilmService service;
	
	@MockBean
	private FilmRepo repo;
	
	@Test
	public void addFilm_ValidFilm_SaveFilm() {
		
		Film saveFilm = new Film(1L, "Shrek", "5", "29th January", "18", "Ogre man", null, null, null);
		Film repoFilm = new Film(1L, "Shrek", "5", "29th January", "18", "Ogre man", null, null, null);

		Mockito.when(this.service.addFilm(saveFilm)).thenReturn(repoFilm);
		assertEquals(repoFilm, this.repo.save(saveFilm));
		Mockito.verify(this.repo, Mockito.times(1)).save(saveFilm);
				
	}
	
	@Test
	public void updateFilmv_ValidId_UpdateFilm() {
		
		Optional<Film> mockOutput = Optional.ofNullable(new Film(1L, "Shrek", "5", "29th January", "18", "Ogre man", null, null, null));
		Film expectedOutput = new Film("Shrek", "5", "29th January", "18", "Ogre man", null, null, null);
		
		Mockito.when(this.repo.findById(1L)).thenReturn(mockOutput);
		Mockito.when(this.repo.save(expectedOutput)).thenReturn(expectedOutput);

		assertEquals(expectedOutput, this.service.updateFilm(expectedOutput, 1L));
		
		Mockito.verify(this.repo, Mockito.times(1)).save(expectedOutput);
		Mockito.verify(this.repo, Mockito.times(1)).findById(1L);		
	}
	
	 @Test
	    public void readFilm_ValidFilm_ReadFilm() {
	        List<Film> filmList = new ArrayList<>();
	        filmList.add(new Film(1L, "Shrek", "5", "29th January", "18", "Ogre man", null, null, null));

	        Mockito.when(this.service.readAllFilms()).thenReturn(filmList);
	        assertEquals(filmList, this.service.readAllFilms());
	        Mockito.verify(this.repo, Mockito.times(1)).findAll();
	    }
	@Test
	    public void deleteFilm_Film() {
		Film validFilm = new Film();
	        Mockito.when(this.repo.findById(validFilm.getFilm_Id())).thenReturn(Optional.of(validFilm));
	        this.service.deleteByFilmId(validFilm.getFilm_Id());
	        Mockito.verify(this.repo, Mockito.times(1)).deleteById(validFilm.getFilm_Id());
	    }
	

}
