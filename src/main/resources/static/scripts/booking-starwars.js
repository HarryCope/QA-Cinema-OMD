function bookingFunction1() {
    const bookingUrl = "http://localhost:8081/Booking";
    const seats = document.querySelectorAll(".row1 .seat1:not(.occupied1)");
    const seatContainer = document.querySelector(".row-container1");

    const count1 = document.getElementById("count1");
    const total1 = document.getElementById("total1");
    const movieSelect1 = document.getElementById("movie1");

    var filmTime = document.getElementById('movie1');

    const newBookingFilmId = document.getElementById('bookingFilmId1');
    const newBookingSeat = document
    const newBookingName = document.getElementById('nameInput1');
    const newBookingScreen = document.getElementById('bookingScreen1')
    const newBookingTime = filmTime.options[filmTime.selectedIndex].text;
    const newBookingPrice = document.getElementById('total1');

    populateUI();
    createBooking();

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

    const createBooking = () => {
        const newBookingFilmIdCreate = newBookingFilmId.value;
        const newBookingSeatCreate = newBookingSeat.value;
        const newBookingNameCreate = newBookingName.value;
        const newBookingScreenCreate = newBookingScreen.value;
        const newBookingTimeCreate = newBookingTime.text;
        const newBookingPriceCreate = newBookingPrice.value;
      
        let bookingData = {
            "film_id": newBookingFilmIdCreate,
            "bookingSeatNumber": newBookingSeatCreate,
            "bookingName": newBookingNameCreate,
            "bookingScreen": newBookingScreenCreate,
            "bookingTime": newBookingTimeCreate,
            "bookingPrice": newBookingPriceCreate
        }
        console.log(bookingData)
      
        fetch(`${bookingUrl}/createBooking`, {
            method: "POST",
            body: JSON.stringify(bookingData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(model => {
                console.log(model);
                readBooking();
            })
            .catch(err => console.error(`error ${err}`));
      };

      const readBooking = () => {
	
        fetch(`${bookingUrl}/getBooking`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (bookingData) {
                    appendData(bookingData);
                })
                .catch(function (err) {
                    console.log('error: ' + err);
                });
            function appendData(bookingData) {
                var mainContainer = document.getElementById("bookingDataList");
                for (var i = 0; i < bookingData.length; i++) {
                    var div = document.createElement("div");
                    div.innerHTML = 'Film id: ' + bookingData[i].film_id + 'Seat number: ' + bookingData[i].bookingSeatNumber + 'Name: ' + bookingData[i].bookingName + 'Screen number: ' + bookingData[i].bookingScreen + 'Booking time: ' + bookingData[i].bookingTime + 'Price: ' + bookingData[i].bookingPrice;
                    mainContainer.appendChild(div);
                }
              }
        };

