package com.qa.qaCinema.modelsTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.lang.reflect.Field;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;

import com.qa.qaCinema.models.Film;

import nl.jqno.equalsverifier.EqualsVerifier;

@TestInstance(Lifecycle.PER_CLASS)
public class FilmsTest {
	
	static Film testFilm;

	@BeforeAll
	public static void buildFilm() {
		System.out.println("Building Film");
		testFilm = new Film(1L, "Shrek", "5", "29th January", "18", "Ogre man", null, null, null);
	}

	@Test
	public void constructors_Film() {
		Film filmOne = new Film();

		assertTrue(filmOne instanceof Film == true);

		Film filmTwo = new Film("Shrek 2", "7", "26th January", "10", "Big Ogre man", null, null, null);

		assertTrue(filmTwo instanceof Film == true);
		assertEquals("Shrek 2", filmTwo.getFilmName());
		assertEquals("7", filmTwo.getFilmRating());
		assertEquals("26th January", filmTwo.getFilmReleaseDate());
		assertEquals("10", filmTwo.getFilmAgeRating());
		assertEquals("Big Ogre man", filmTwo.getFilmSynopsis());
		assertEquals(null, filmTwo.getFilmCast());
		assertEquals(null, filmTwo.getFilmDirectors());
		assertEquals(null, filmTwo.getFilmGenres());
		
	}
	
	@Test
	public void constructors_Film_FilmWithId() {
		Film filmOne = new Film();

		assertTrue(filmOne instanceof Film == true);

		Film filmTwo = new Film(1L, "Shrek 2", "7", "26th January", "10", "Big Ogre man", null, null, null);

		assertTrue(filmTwo instanceof Film == true);
		assertEquals(1L, filmTwo.getFilm_Id());
		assertEquals("Shrek 2", filmTwo.getFilmName());
		assertEquals("7", filmTwo.getFilmRating());
		assertEquals("26th January", filmTwo.getFilmReleaseDate());
		assertEquals("10", filmTwo.getFilmAgeRating());
		assertEquals("Big Ogre man", filmTwo.getFilmSynopsis());
		assertEquals(null, filmTwo.getFilmCast());
		assertEquals(null, filmTwo.getFilmDirectors());
		assertEquals(null, filmTwo.getFilmGenres());
	}
	
		
	@Test
	public void toString_String_FilmInstance() {
		String expecting = "Films [film_Id=" + testFilm.getFilm_Id() + ", filmName=" + testFilm.getFilmName() + ", filmRating=" + testFilm.getFilmRating()
				+ ", filmReleaseDate=" + testFilm.getFilmReleaseDate() + ", filmAgeRating=" + testFilm.getFilmAgeRating() + ", filmSynopsis="
				+ testFilm.getFilmSynopsis() + ", filmCast=" + testFilm.getFilmCast() + ", filmDirectors=" + testFilm.getFilmDirectors() + ", filmGenres="
				+ testFilm.getFilmGenres() + "]";

		assertEquals(expecting, testFilm.toString());
	}

	@Test
    public void setIdTest() throws NoSuchFieldException, IllegalAccessException {
        Film testEntry = new Film(1L, "Shrek", "5", "29th January", "18", "Ogre man", null, null, null);
        testEntry.setFilm_Id(5L);

       Field expected = testEntry.getClass().getDeclaredField("filmId");
        expected.setAccessible(true);
        assertEquals(expected.get(testEntry), 5L);
    }
	
	@Test
    public void setFilmNameTest() throws NoSuchFieldException, IllegalAccessException {
        Film testEntry = new Film(1L, "Shrek", "5", "29th January", "18", "Ogre man", null, null, null);
        testEntry.setFilmName("Donkey");

       Field expected = testEntry.getClass().getDeclaredField("filmName");
        expected.setAccessible(true);
        assertEquals(expected.get(testEntry), "Donkey");
    }
	
	@Test
    public void setFilmRatingTest() throws NoSuchFieldException, IllegalAccessException {
        Film testEntry = new Film(1L, "Shrek", "5", "29th January", "18", "Ogre man", null, null, null);
        testEntry.setFilmRating("10");

       Field expected = testEntry.getClass().getDeclaredField("filmRating");
        expected.setAccessible(true);
        assertEquals(expected.get(testEntry), "10");
    }
	
	@Test
    public void setReleaseDateTest() throws NoSuchFieldException, IllegalAccessException {
        Film testEntry = new Film(1L, "Shrek", "5", "29th January", "18", "Ogre man", null, null, null);
        testEntry.setFilmReleaseDate("10th June");

       Field expected = testEntry.getClass().getDeclaredField("filmReleaseDate");
        expected.setAccessible(true);
        assertEquals(expected.get(testEntry), "10th June");
    }
	
	@Test
    public void setAgeRatingTest() throws NoSuchFieldException, IllegalAccessException {
        Film testEntry = new Film(1L, "Shrek", "5", "29th January", "18", "Ogre man", null, null, null);
        testEntry.setFilmAgeRating("20");

       Field expected = testEntry.getClass().getDeclaredField("filmAgeRating");
        expected.setAccessible(true);
        assertEquals(expected.get(testEntry), "20");
    }
	
	@Test
    public void setSynopsisTest() throws NoSuchFieldException, IllegalAccessException {
        Film testEntry = new Film(1L, "Shrek", "5", "29th January", "18", "Ogre man", null, null, null);
        testEntry.setFilmSynopsis("Big Ogre");

       Field expected = testEntry.getClass().getDeclaredField("filmSynopsis");
        expected.setAccessible(true);
        assertEquals(expected.get(testEntry), "Big Ogre");
    }
	
	
	
	@Test
	public void hashAndEqualsTest() {
	    EqualsVerifier.simple().forClass(Film.class).verify();
	}

}
