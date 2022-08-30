package com.qa.qaCinema.models;

//import java.util.ArrayList;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long booking_Id;
	
	@Column
	private Long film_Id;
	
	//May change to ArrayList at some point for multiple bookings
	@Column
	private int bookingSeatNumber;
	
	//This is the name of the person booking
	@Column
	private String bookingName;
	
	@Column
	private String bookingScreen;
	
	@Column
	private String bookingTime;
	
	@Column
	private String bookingPrice;

	public Long getBooking_Id() {
		return booking_Id;
	}

	public void setBooking_Id(Long booking_Id) {
		this.booking_Id = booking_Id;
	}

	public Long getFilm_Id() {
		return film_Id;
	}

	public void setFilm_Id(Long film_Id) {
		this.film_Id = film_Id;
	}

	public int getBookingSeatNumber() {
		return bookingSeatNumber;
	}

	public void setBookingSeatNumber(int bookingSeatNumber) {
		this.bookingSeatNumber = bookingSeatNumber;
	}

	public String getBookingName() {
		return bookingName;
	}

	public void setBookingName(String bookingName) {
		this.bookingName = bookingName;
	}

	public String getBookingScreen() {
		return bookingScreen;
	}

	public void setBookingScreen(String bookingScreen) {
		this.bookingScreen = bookingScreen;
	}

	public String getBookingTime() {
		return bookingTime;
	}

	public void setBookingTime(String bookingTime) {
		this.bookingTime = bookingTime;
	}

	public String getBookingPrice() {
		return bookingPrice;
	}

	public void setBookingPrice(String bookingPrice) {
		this.bookingPrice = bookingPrice;
	}

	@Override
	public String toString() {
		return "Booking [booking_Id=" + booking_Id + ", film_Id=" + film_Id + ", bookingSeatNumber=" + bookingSeatNumber
				+ ", bookingName=" + bookingName + ", bookingScreen=" + bookingScreen + ", bookingTime=" + bookingTime
				+ ", bookingPrice=" + bookingPrice + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(bookingName, bookingPrice, bookingScreen, bookingSeatNumber, bookingTime, booking_Id,
				film_Id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Booking other = (Booking) obj;
		return Objects.equals(bookingName, other.bookingName) && Objects.equals(bookingPrice, other.bookingPrice)
				&& Objects.equals(bookingScreen, other.bookingScreen) && bookingSeatNumber == other.bookingSeatNumber
				&& Objects.equals(bookingTime, other.bookingTime) && Objects.equals(booking_Id, other.booking_Id)
				&& Objects.equals(film_Id, other.film_Id);
	}
	
	
}
