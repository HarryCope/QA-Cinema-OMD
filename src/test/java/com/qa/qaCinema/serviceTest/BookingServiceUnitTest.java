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

import com.qa.qaCinema.Repo.BookingRepo;
import com.qa.qaCinema.Services.BookingService;
import com.qa.qaCinema.models.Booking;


@SpringBootTest(webEnvironment = WebEnvironment.MOCK)
@Service
public class BookingServiceUnitTest {

	@Autowired
	private BookingService service;
	
	@MockBean
	private BookingRepo repo;
		
	@Test
	public void addBooking_ValidBooking_SaveBooking() {
		
		Booking saveBooking = new Booking(1L, "5", "Harry", "3", "18:00", "£10.00");
		Booking repoBooking = new Booking(1L, 1L, "5", "Harry", "3", "18:00", "£10.00");

		Mockito.when(this.service.addBooking(saveBooking)).thenReturn(repoBooking);
		assertEquals(repoBooking, this.repo.save(saveBooking));
		Mockito.verify(this.repo, Mockito.times(1)).save(saveBooking);
				
	}
	
//	@Test
//	public void updateBooking_ValidId_UpdateBooking() {
//		
//		Optional<Booking> mockOutput = Optional.ofNullable(new Booking(1L, 1L, 5, "Harry", "3", "18:00", "£10.00"));
//		Booking expectedOutput = new Booking(1L, 5, "Harry", "3", "18:00", "£10.00");
//		
//		Mockito.when(this.repo.findById(1L)).thenReturn(mockOutput);
//		Mockito.when(this.repo.save(expectedOutput)).thenReturn(expectedOutput);
//
//		assertEquals(expectedOutput, this.service.updateBooking(expectedOutput, 1L));
//		
//		Mockito.verify(this.repo, Mockito.times(1)).save(expectedOutput);
//		Mockito.verify(this.repo, Mockito.times(1)).findById(1L);		
//	}
	
	 @Test
	    public void readBooking_ValidBooking_ReadBooking() {
	        List<Booking> bookList = new ArrayList<>();
	        bookList.add(new Booking(1L, 1L, "5", "Harry", "3", "18:00", "£10.00"));

	        Mockito.when(this.service.readAllBookings()).thenReturn(bookList);
	        assertEquals(bookList, this.service.readAllBookings());
	        Mockito.verify(this.repo, Mockito.times(1)).findAll();
	    }
	@Test
	    public void deleteBooking_Booking() {
		Booking validBooking = new Booking();
	        Mockito.when(this.repo.findById(validBooking.getBooking_Id())).thenReturn(Optional.of(validBooking));
	        this.service.deleteByBookingID(validBooking.getBooking_Id());
	        Mockito.verify(this.repo, Mockito.times(1)).deleteById(validBooking.getBooking_Id());
	    }
}
