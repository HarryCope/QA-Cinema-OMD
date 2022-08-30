package com.qa.qaCinema.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.qaCinema.Repo.BookingRepo;

@Service
public class BookingService {

	@Autowired
	private BookingRepo repo;

	@Autowired
	public BookingService(BookingRepo repo) {
		this.repo = repo;
	}

	// Create
	public Booking addFilm(Booking booking) {
		return repo.save(Booking);
	}

	// Read
	public Booking readBooking(Long booking_Id) {
		return repo.findById(booking_Id).get();
	}

	public List<Booking> readAllBookings() {
		return this.repo.findAll();
	}

	// Update
	public Booking updateBooking(Booking updateBooking, Long booking_Id) {

		Optional<Booking> currentBooking = this.repo.findById(booking_Id);

		if (currentBooking.get() instanceof Booking) {
			Booking oldBooking = currentBooking.get();

			oldBooking.setbooking_Id(updateBooking.getbooking_Id());
			oldBooking.setbookingName(updateBooking.getbookingName());
			oldBooking.setbookingScreen(updateBooking.getbookingScreen());
			oldBooking.setbookingSeatNumber(updateBooking.getbookingSeatNumber());
			oldBooking.setbookingTime(updateBooking.getbookingTime());
			oldBooking.setbookingPrice(updateBooking.getbookingPrice());

			return repo.save(oldBooking);
		}

		// else {throw ...}
		return null;
	}

	// Delete
	public boolean deleteByBookingID(Long booking_Id) {
		Optional<Booking> currentFilm = this.repo.findById(booking_Id);

		// Ternary Statement we need to ensure we use it within a variable

		boolean isPresent = (currentFilm.isPresent()) ? true : false;

		if (isPresent) {
			this.repo.deleteById(booking_Id);
			return true;
		} else {
//			throw new Exception();
			return false;
		}
	}

}
