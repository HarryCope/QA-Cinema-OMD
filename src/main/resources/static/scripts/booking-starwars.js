const bookingUrl = "http://localhost:8081/Booking";
//let total1 = document.getElementById("total1");

let filmTime = document.getElementById('movie1');

let newBookingSeat = document
let newBookingName = document.getElementById('nameInput1');
let newBookingTime = filmTime.options[filmTime.selectedIndex].text;
let newBookingPrice = document.getElementById('total1');


function bookingFunction1() {
    
    const seats = document.querySelectorAll(".row1 .seat1:not(.occupied1)");
    const seatContainer = document.querySelector(".row-container1");

    const count1 = document.getElementById("count1");
   
    const movieSelect1 = document.getElementById("movie1");

    populateUI();

    let ticketPrice1 = +movieSelect1.value;


    // Save selected movie index and price
    function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
    }

    function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".container1 .selected1");

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
            seat.classList.add("selected1");
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
        e.target.classList.contains("seat1") &&
        !e.target.classList.contains("occupied1")
    ) {
        e.target.classList.toggle("selected1");
        updateSelectedCount();
    }
    });

    // Initial count and total rendering
    updateSelectedCount();
}

const createBooking1 = () => {
        //let newBookingSeatCreate = newBookingSeat.value;
        let newBookingNameCreate = newBookingName.value;
        let newBookingTimeCreate = newBookingTime;
        let newBookingPriceCreate = newBookingPrice.textContent;
      
        let bookingData1 = {
            "film_id": "1",
            "bookingSeatNumber": JSON.stringify(seatsIndex),
            "bookingName": newBookingNameCreate,
            "bookingScreen":"1",
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
                readBooking1();
            })
            .catch(err => console.error(`error ${err}`));
            console.log(seatsIndex)
      };

      const readBooking1 = () => {
	
        fetch(`${bookingUrl}/getBooking`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (bookingData1) {
                    appendData(bookingData1);
                })
                .catch(function (err) {
                    console.log('error: ' + err);
                });
            function appendData(bookingData1) {
                var mainContainer = document.getElementById("bookingDataList");
                for (var i = 0; i < bookingData1.length; i++) {
                    var div = document.createElement("div");
                    div.innerHTML = 'Film id: ' + bookingData1[i].film_id + 'Seat number: ' + bookingData1[i].bookingSeatNumber + 'Name: ' + bookingData1[i].bookingName + 'Screen number: ' + bookingData1[i].bookingScreen + 'Booking time: ' + bookingData1[i].bookingTime + 'Price: ' + bookingData1[i].bookingPrice;
                    mainContainer.appendChild(div);
                }
              }
        };