const bookingUrl = "http://localhost:8081/Booking";
//let total1 = document.getElementById("total1");

let filmTime = document.getElementById('movie4');

let newBookingName = document.getElementById('nameInput4');
let newBookingTime = filmTime.options[filmTime.selectedIndex].text;
let newBookingPrice = document.getElementById('total4');


function bookingFunction4() {
    
    const seats = document.querySelectorAll(".row4 .seat4:not(.occupied4)");
    const seatContainer = document.querySelector(".row-container4");

    const count1 = document.getElementById("count4");
   
    const movieSelect1 = document.getElementById("movie4");

    populateUI();

    let ticketPrice1 = +movieSelect1.value;


    // Save selected movie index and price
    function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
    }

    function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".container4 .selected4");

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
            seat.classList.add("selected4");
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
        e.target.classList.contains("seat4") &&
        !e.target.classList.contains("occupied4")
    ) {
        e.target.classList.toggle("selected4");
        updateSelectedCount();
    }
    });

    // Initial count and total rendering
    updateSelectedCount();
}

const createBooking4 = () => {
        //let newBookingSeatCreate = newBookingSeat.value;
        let newBookingNameCreate = newBookingName.value;
        let newBookingTimeCreate = newBookingTime;
        let newBookingPriceCreate = newBookingPrice.textContent;
        //
        console.log(newBookingTimeCreate);
      
        let bookingData1 = {
            "film_Id": "4",
            "bookingSeatNumber": JSON.stringify(seatsIndex),
            "bookingName": newBookingNameCreate,
            "bookingScreen":"4",
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

