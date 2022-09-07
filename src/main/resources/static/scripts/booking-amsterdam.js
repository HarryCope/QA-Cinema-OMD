function bookingFunction3() {    
    const bookUrl = "http://localhost:8081/book";
    const seats = document.querySelectorAll(".row3 .seat3:not(.occupied3)");
    const seatContainer = document.querySelector(".row-container3");

    const count3 = document.getElementById("count3");
    const total3 = document.getElementById("total3");
    const movieSelect3 = document.getElementById("movie3");

    populateUI();

    let ticketPrice3 = +movieSelect3.value;


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
    count3.textContent = selectedSeatsCount;
    total3.textContent = selectedSeatsCount * ticketPrice3;
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
        movieSelect3.selectedIndex = selectedMovieIndex;
    }
    }

    // Movie select event

    movieSelect3.addEventListener("change", function(e) {
    ticketPrice3 = +movieSelect3.value;
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