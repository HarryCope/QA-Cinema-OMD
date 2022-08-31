package com.qa.qaCinema.modelsTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.lang.reflect.Field;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;

import com.qa.qaCinema.models.Booking;

import nl.jqno.equalsverifier.EqualsVerifier;

@TestInstance(Lifecycle.PER_CLASS)
public class BookingsTest {

	static Booking testBooking;
	
	@BeforeAll
	public static void buildBooking() {
		System.out.println("Building Booking");
		testBooking = new Booking(1L, 1L, 5, "Harry", "2", "18:00", "£5.00");
	}
	
	@Test
	public void constructors_Booking() {
		Booking bookingOne = new Booking();

		assertTrue(bookingOne instanceof Booking == true);

		Booking bookingTwo = new Booking(2L, 5, "Jack", "5", "17:00", "£10.00");

		assertTrue(bookingTwo instanceof Booking == true);
		assertEquals(2L, bookingTwo.getFilm_Id());
		assertEquals(5, bookingTwo.getBookingSeatNumber());
		assertEquals("Jack", bookingTwo.getBookingName());
		assertEquals("5", bookingTwo.getBookingScreen());
		assertEquals("17:00", bookingTwo.getBookingTime());
		assertEquals("£10.00", bookingTwo.getBookingPrice());
	}
	
	@Test
	public void constructors_Booking_BookingWithId() {
		Booking bookingOne = new Booking();

		assertTrue(bookingOne instanceof Booking == true);

		Booking bookingTwo = new Booking(1L, 2L, 5, "Jack", "5", "17:00", "£10.00");

		assertTrue(bookingTwo instanceof Booking == true);
		assertEquals(1L, bookingTwo.getBooking_Id());
		assertEquals(2L, bookingTwo.getFilm_Id());
		assertEquals(5, bookingTwo.getBookingSeatNumber());
		assertEquals("Jack", bookingTwo.getBookingName());
		assertEquals("5", bookingTwo.getBookingScreen());
		assertEquals("17:00", bookingTwo.getBookingTime());
		assertEquals("£10.00", bookingTwo.getBookingPrice());
	}
	
	@Test
	public void toString_String_BookingInstance() {
		String expecting = "Booking [booking_Id=" + testBooking.getBooking_Id() + ", film_Id=" + testBooking.getFilm_Id() + ", bookingSeatNumber=" + testBooking.getBookingSeatNumber()
				+ ", bookingName=" + testBooking.getBookingName() + ", bookingScreen=" + testBooking.getBookingScreen() + ", bookingTime=" + testBooking.getBookingTime()
				+ ", bookingPrice=" + testBooking.getBookingPrice() + "]";

		assertEquals(expecting, testBooking.toString());
	}
	
	@Test
    public void setIdTest() throws NoSuchFieldException, IllegalAccessException {
        Booking testEntry = new Booking(1L, 1L, 5, "Harry", "2", "18:00", "£5.00");
        testEntry.setBooking_Id(5L);

       Field expected = testEntry.getClass().getDeclaredField("booking_Id");
        expected.setAccessible(true);
        assertEquals(expected.get(testEntry), 5L);
    }
	
	@Test
    public void setFilmIdTest() throws NoSuchFieldException, IllegalAccessException {
        Booking testEntry = new Booking(1L, 1L, 5, "Harry", "2", "18:00", "£5.00");
        testEntry.setFilm_Id(5L);

       Field expected = testEntry.getClass().getDeclaredField("film_Id");
        expected.setAccessible(true);
        assertEquals(expected.get(testEntry), 5L);
    }
	
	@Test
    public void setSeatNumberTest() throws NoSuchFieldException, IllegalAccessException {
        Booking testEntry = new Booking(1L, 1L, 5, "Harry", "2", "18:00", "£5.00");
        testEntry.setBookingSeatNumber(10);

       Field expected = testEntry.getClass().getDeclaredField("bookingSeatNumber");
        expected.setAccessible(true);
        assertEquals(expected.get(testEntry), 10);
    }
	
	@Test
    public void setBookingNameTest() throws NoSuchFieldException, IllegalAccessException {
        Booking testEntry = new Booking(1L, 1L, 5, "Harry", "2", "18:00", "£5.00");
        testEntry.setBookingName("Westley");

       Field expected = testEntry.getClass().getDeclaredField("bookingName");
        expected.setAccessible(true);
        assertEquals(expected.get(testEntry), "Westley");
    }
	
	@Test
    public void setBookingScreenTest() throws NoSuchFieldException, IllegalAccessException {
        Booking testEntry = new Booking(1L, 1L, 5, "Harry", "2", "18:00", "£5.00");
        testEntry.setBookingScreen("2");

       Field expected = testEntry.getClass().getDeclaredField("bookingScreen");
        expected.setAccessible(true);
        assertEquals(expected.get(testEntry), "2");
    }
	
	@Test
    public void setBookingTimeTest() throws NoSuchFieldException, IllegalAccessException {
        Booking testEntry = new Booking(1L, 1L, 5, "Harry", "2", "18:00", "£5.00");
        testEntry.setBookingTime("19:00");

       Field expected = testEntry.getClass().getDeclaredField("bookingTime");
        expected.setAccessible(true);
        assertEquals(expected.get(testEntry), "19:00");
    }
	
	@Test
    public void setBookingPriceTest() throws NoSuchFieldException, IllegalAccessException {
        Booking testEntry = new Booking(1L, 1L, 5, "Harry", "2", "18:00", "£5.00");
        testEntry.setBookingPrice("£15.00");

       Field expected = testEntry.getClass().getDeclaredField("bookingPrice");
        expected.setAccessible(true);
        assertEquals(expected.get(testEntry), "£15.00");
    }
	
	@Test
	public void hashAndEqualsTest() {
	    EqualsVerifier.simple().forClass(Booking.class).verify();
	}
	
	
}
