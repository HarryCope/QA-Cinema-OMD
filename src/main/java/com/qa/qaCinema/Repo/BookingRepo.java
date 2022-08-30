package com.qa.qaCinema.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.qa.qaCinema.models.Booking;

public interface BookingRepo extends JpaRepository<Booking, Long> {

	@Query(value = "SELECT * FROM Booking", nativeQuery = true)
	public List<Booking> allFromBooking();

	@Query(value = "SELECT * FROM Booking WHERE booking_Id = ?1", nativeQuery = true)
	public List<Booking> sameIdSelect(Long Booking_Id);

}
