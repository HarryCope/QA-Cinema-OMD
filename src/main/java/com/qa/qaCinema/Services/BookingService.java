package com.qa.qaCinema.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.qaCinema.Repo.BookingRepo;
import com.qa.qaCinema.models.Booking;

@Service
public class BookingService {

	@Autowired
	private BookingRepo repo;

	@Autowired
	public BookingService(BookingRepo repo) {
		this.repo = repo;
	}

	// Create
	public Booking addBooking(Booking booking) {
		return repo.save(booking);
	}

	// Read
	public Booking readBooking(Long Booking_Id) {
		return repo.findById(Booking_Id).get();
	}

	public List<Booking> readAllBookings() {
		return this.repo.findAll();
	}

	// Update
	public Booking updateBooking(Booking updateBooking, Long bookingId) {

		Optional<Booking> currentBooking = this.repo.findById(bookingId);

		if (currentBooking.get() instanceof Booking) {
			Booking oldBooking = currentBooking.get();

			oldBooking.setBooking_Id(bookingId);
			oldBooking.setBookingName(updateBooking.getBookingName());
			oldBooking.setBookingScreen(updateBooking.getBookingScreen());
			oldBooking.setBookingSeatNumber(updateBooking.getBookingSeatNumber());
			oldBooking.setBookingTime(updateBooking.getBookingTime());
			oldBooking.setBookingTime(updateBooking.getBookingPrice());

			return repo.save(oldBooking);
		}

		// else {throw ...}
		return null;
	}

	// Delete
	public boolean deleteByBookingID(Long Booking_Id) {
		Optional<Booking> currentFilm = this.repo.findById(Booking_Id);

		// Ternary Statement we need to ensure we use it within a variable

		boolean isPresent = (currentFilm.isPresent()) ? true : false;

		if (isPresent) {
			this.repo.deleteById(Booking_Id);
			return true;
		} else {
//			throw new Exception();
			return false;
		}
	}

}
