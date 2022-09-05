package com.qa.qaCinema.models;

import java.util.ArrayList;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Film {

		public Film() {
		super();
	}

		public Film(String filmName, String filmRating, String filmReleaseDate, String filmAgeRating, String filmSynopsis,
			ArrayList<String> filmCast, ArrayList<String> filmDirectors, ArrayList<String> filmGenres) {
		super();
		this.filmName = filmName;
		this.filmRating = filmRating;
		this.filmReleaseDate = filmReleaseDate;
		this.filmAgeRating = filmAgeRating;
		this.filmSynopsis = filmSynopsis;
		this.filmCast = filmCast;
		this.filmDirectors = filmDirectors;
		this.filmGenres = filmGenres;
	}

		public Film(Long filmId, String filmName, String filmRating, String filmReleaseDate, String filmAgeRating,
			String filmSynopsis, ArrayList<String> filmCast, ArrayList<String> filmDirectors,
			ArrayList<String> filmGenres) {
		super();
		this.filmId = filmId;
		this.filmName = filmName;
		this.filmRating = filmRating;
		this.filmReleaseDate = filmReleaseDate;
		this.filmAgeRating = filmAgeRating;
		this.filmSynopsis = filmSynopsis;
		this.filmCast = filmCast;
		this.filmDirectors = filmDirectors;
		this.filmGenres = filmGenres;
	}

		//Create the attributes of "Films"
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long filmId;
		
		@Column
		private String filmName;
		
		@Column
		private String filmRating;
		
		@Column
		private String filmReleaseDate;
		
		@Column
		private String filmAgeRating;
		
		@Column
		private String filmSynopsis;
		
		@Column 
		private ArrayList<String> filmCast;
		
		@Column
		private ArrayList<String> filmDirectors;
		
		@Column
		private ArrayList<String> filmGenres;
		
		//@Column
		//private String filmRunningTime;
		
		//@Column
		//private String filmShowingTimes;
		
		
		//Create the getters and setters

		public Long getFilm_Id() {
			return filmId;
		}

		public void setFilm_Id(Long filmId) {
			this.filmId = filmId;
		}

		public String getFilmName() {
			return filmName;
		}

		public void setFilmName(String filmName) {
			this.filmName = filmName;
		}

		public String getFilmRating() {
			return filmRating;
		}

		public void setFilmRating(String filmRating) {
			this.filmRating = filmRating;
		}

		public String getFilmReleaseDate() {
			return filmReleaseDate;
		}

		public void setFilmReleaseDate(String filmReleaseDate) {
			this.filmReleaseDate = filmReleaseDate;
		}

		public String getFilmAgeRating() {
			return filmAgeRating;
		}

		public void setFilmAgeRating(String filmAgeRating) {
			this.filmAgeRating = filmAgeRating;
		}

		public String getFilmSynopsis() {
			return filmSynopsis;
		}

		public void setFilmSynopsis(String filmSynopsis) {
			this.filmSynopsis = filmSynopsis;
		}

		public ArrayList<String> getFilmCast() {
			return filmCast;
		}

		public void setFilmCast(ArrayList<String> filmCast) {
			this.filmCast = filmCast;
		}

		public ArrayList<String> getFilmDirectors() {
			return filmDirectors;
		}

		public void setFilmDirectors(ArrayList<String> filmDirectors) {
			this.filmDirectors = filmDirectors;
		}
		
		public ArrayList<String> getFilmGenres() {
			return filmGenres;
		}

		public void setFilmGenres(ArrayList<String> filmGenres) {
			this.filmGenres = filmGenres;
		}

		@Override
		public String toString() {
			return "Films [film_Id=" + filmId + ", filmName=" + filmName + ", filmRating=" + filmRating
					+ ", filmReleaseDate=" + filmReleaseDate + ", filmAgeRating=" + filmAgeRating + ", filmSynopsis="
					+ filmSynopsis + ", filmCast=" + filmCast + ", filmDirectors=" + filmDirectors + ", filmGenres="
					+ filmGenres + "]";
		}

		@Override
		public int hashCode() {
			return Objects.hash(filmAgeRating, filmCast, filmDirectors, filmGenres, filmName, filmRating,
					filmReleaseDate, filmSynopsis);
		}

		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			Film other = (Film) obj;
			return Objects.equals(filmAgeRating, other.filmAgeRating) && Objects.equals(filmCast, other.filmCast)
					&& Objects.equals(filmDirectors, other.filmDirectors)
					&& Objects.equals(filmGenres, other.filmGenres) && Objects.equals(filmName, other.filmName)
					&& Objects.equals(filmRating, other.filmRating)
					&& Objects.equals(filmReleaseDate, other.filmReleaseDate)
					&& Objects.equals(filmSynopsis, other.filmSynopsis);
		}
			
}
