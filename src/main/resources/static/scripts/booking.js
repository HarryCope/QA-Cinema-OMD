const bookUrl = "http://localhost:8081/book";
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const seatContainer = document.querySelector(".row-container");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

const newBookingFilmId = document
const newBookingSeat = document
const newBookingName = document
const newBookingScreen = document
const newBookingTime = document
const newBookingPrice = document

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".container .selected");

  seatsIndex = [...selectedSeats].map(function(seat) {
    return [...seats].indexOf(seat);
  });

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  let selectedSeatsCount = selectedSeats.length;
  count.textContent = selectedSeatsCount;
  total.textContent = selectedSeatsCount * ticketPrice;
}

// Get data from localstorage and populate
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach(function(seat, index) {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event

movieSelect.addEventListener("change", function(e) {
  ticketPrice = +movieSelect.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Adding selected class to only non-occupied seats on 'click'

seatContainer.addEventListener("click", function(e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

// Initial count and total rendering
updateSelectedCount();

const readBooking = () => {
	
	fetch(`${bookUrl}/getBooking`)
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

const createBooking = () => {
  const newBookingFilmIdCreate = newBookingFilmId.value;
  const newBookingSeatCreate = newBookingSeat.value;
  const newBookingNameCreate = newBookingName.value;
  const newBookingScreenCreate = newBookingScreen.value;
  const newBookingTimeCreate = newBookingTime.value;
  const newBookingPriceCreate = newBookingPrice.value;

  let bookingData = {
      "film_id": newPokemonNameCreate,
      "bookingSeatNumber": newPokemonTypeCreate,
      "bookingName": newPokemonLevelCreate,
      "bookingScreen": newPokemonHeldItemCreate,
      "bookingTime": newPokemonHeldItemCreate,
      "bookingPrice": newPokemonHeldItemCreate
  }
  console.log(bookingData)

  fetch(`${bookUrl}/createBooking`, {
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