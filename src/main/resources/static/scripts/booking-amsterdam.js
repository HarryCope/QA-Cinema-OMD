const bookingUrl = "http://localhost:8081/Booking";
//let total1 = document.getElementById("total1");

let filmTime = document.getElementById('movie3');

let newBookingName = document.getElementById('nameInput3');
let newBookingTime = filmTime.options[filmTime.selectedIndex].text;
let newBookingPrice = document.getElementById('total');


function bookingFunction3() {
    
    const seats = document.querySelectorAll(".row3 .seat3:not(.occupied3)");
    const seatContainer = document.querySelector(".row-container3");

    const count1 = document.getElementById("count3");
   
    const movieSelect1 = document.getElementById("movie3");

    populateUI();

    let ticketPrice1 = +movieSelect1.value;


    // Save selected movie index and price
    function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
    }

    function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".container3 .selected3");

    seatsIndex = [...selectedSeats].map(function(seat) {
        return [...seats].indexOf(seat);
    });

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    let selectedSeatsCount = selectedSeats.length;
    count1.textContent = selectedSeatsCount;
    total1.textContent = selectedSeatsCount * ticketPrice1;
    }

    // Get data from localstorage and populate
    function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach(function(seat, index) {
        if (selectedSeats.indexOf(index) > -1) {
            seat.classList.add("selected3");
        }
        });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if (selectedMovieIndex !== null) {
        movieSelect1.selectedIndex = selectedMovieIndex;
    }
    }

    // Movie select event

    movieSelect1.addEventListener("change", function(e) {
    ticketPrice1 = +movieSelect1.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
    });

    // Adding selected class to only non-occupied seats on 'click'

    seatContainer.addEventListener("click", function(e) {
    if (
        e.target.classList.contains("seat3") &&
        !e.target.classList.contains("occupied3")
    ) {
        e.target.classList.toggle("selected3");
        updateSelectedCount();
    }
    });

    // Initial count and total rendering
    updateSelectedCount();
}

const createBooking3 = () => {
        //let newBookingSeatCreate = newBookingSeat.value;
        let newBookingNameCreate = newBookingName.value;
        let newBookingTimeCreate = newBookingTime;
        let newBookingPriceCreate = newBookingPrice.textContent;
        //
        console.log(newBookingTimeCreate);
      
        let bookingData1 = {
            "film_Id": "3",
            "bookingSeatNumber": JSON.stringify(seatsIndex),
            "bookingName": newBookingNameCreate,
            "bookingScreen":"3",
            "bookingTime": newBookingTimeCreate,
            "bookingPrice": newBookingPriceCreate
        }
        console.log(bookingData1)
      
        fetch(`${bookingUrl}/createBooking`, {
            method: "POST",
            body: JSON.stringify(bookingData1),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(model => {
                //console.log(model);
            
            })
            .catch(err => console.error(`error ${err}`));
            console.log(seatsIndex)
      };

