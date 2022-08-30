package com.qa.qaCinema.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.qaCinema.Services.BookingService;
import com.qa.qaCinema.models.Booking;

@RestController
@RequestMapping("/Booking")
public class BookingController {

	@Autowired
	BookingService service;
	
	public BookingController(BookingService service) {
		this.service = service;
	}	
	
	@GetMapping("/getBooking")
	public ResponseEntity <List<Booking>> getBooking() {
		List<Booking> bookingData = service.readAllBookings();
		return new ResponseEntity<List<Booking>>(bookingData, HttpStatus.OK);
	}
	
	@PostMapping("/createBooking")
	public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
		Booking createBooking = service.addBooking(booking);
		return new ResponseEntity<Booking>(createBooking, HttpStatus.CREATED);
	}
	
	@PutMapping("/updateBooking/{booking_Id}")
	public ResponseEntity<Booking> updateBooking(@RequestBody Booking booking, @PathVariable Long bookingId) {
		Booking updateBooking = service.updateBooking(booking, bookingId);
		return new ResponseEntity<Booking>(updateBooking, HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteBooking/{booking_Id}")
	public ResponseEntity<Boolean> deleteBooking(@PathVariable Long bookingId) {
		Boolean deletedBooking = service.deleteByBookingID(bookingId);
		return new ResponseEntity<Boolean>(deletedBooking, HttpStatus.NO_CONTENT);
	}
}
