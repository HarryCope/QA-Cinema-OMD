package com.qa.qaCinema.models;

import java.util.ArrayList;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Films {

		//Create the attributes of "Films"
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
		
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

		//Create the getters and setters
		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
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

		//Create the toString
		@Override
		public String toString() {
			return "Films [id=" + id + ", filmName=" + filmName + ", filmRating=" + filmRating + ", filmReleaseDate="
					+ filmReleaseDate + ", filmAgeRating=" + filmAgeRating + ", filmSynopsis=" + filmSynopsis
					+ ", filmCast=" + filmCast + ", filmDirectors=" + filmDirectors + "]";
		}

		@Override
		public int hashCode() {
			return Objects.hash(filmAgeRating, filmCast, filmDirectors, filmName, filmRating, filmReleaseDate,
					filmSynopsis, id);
		}

		//Create the hashcode
		@Override
		public boolean equals(Object obj) {
			if (this == obj)
				return true;
			if (obj == null)
				return false;
			if (getClass() != obj.getClass())
				return false;
			Films other = (Films) obj;
			return Objects.equals(filmAgeRating, other.filmAgeRating) && Objects.equals(filmCast, other.filmCast)
					&& Objects.equals(filmDirectors, other.filmDirectors) && Objects.equals(filmName, other.filmName)
					&& Objects.equals(filmRating, other.filmRating)
					&& Objects.equals(filmReleaseDate, other.filmReleaseDate)
					&& Objects.equals(filmSynopsis, other.filmSynopsis) && Objects.equals(id, other.id);
		}
			
}
