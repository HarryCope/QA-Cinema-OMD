function bookingFunction2() {    
    const bookUrl = "http://localhost:8081/book";
    const seats = document.querySelectorAll(".row2 .seat2:not(.occupied2)");
    const seatContainer = document.querySelector(".row-container2");

    const count2 = document.getElementById("count2");
    const total2 = document.getElementById("total2");
    const movieSelect2 = document.getElementById("movie2");

    populateUI();

    let ticketPrice2 = +movieSelect2.value;


    // Save selected movie index and price
    function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
    }

    function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".container2 .selected2");

    seatsIndex = [...selectedSeats].map(function(seat) {
        return [...seats].indexOf(seat);
    });

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    let selectedSeatsCount = selectedSeats.length;
    count2.textContent = selectedSeatsCount;
    total2.textContent = selectedSeatsCount * ticketPrice2;
    }

    // Get data from localstorage and populate
    function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach(function(seat, index) {
        if (selectedSeats.indexOf(index) > -1) {
            seat.classList.add("selected2");
        }
        });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if (selectedMovieIndex !== null) {
        movieSelect2.selectedIndex = selectedMovieIndex;
    }
    }

    // Movie select event

    movieSelect1.addEventListener("change", function(e) {
    ticketPrice2 = +movieSelect2.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
    });

    // Adding selected class to only non-occupied seats on 'click'

    seatContainer.addEventListener("click", function(e) {
    if (
        e.target.classList.contains("seat2") &&
        !e.target.classList.contains("occupied2")
    ) {
        e.target.classList.toggle("selected2");
        updateSelectedCount();
    }
    });

    // Initial count and total rendering
    updateSelectedCount();
}