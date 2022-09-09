const bookingUrl = "http://localhost:8081/Booking";
//let total1 = document.getElementById("total1");

let newBookingName1 = document.getElementById('nameInput1');
let newBookingPrice1 = document.getElementById('total1');

let newBookingName2 = document.getElementById('nameInput2');
let newBookingPrice2 = document.getElementById('total2');

let newBookingName3 = document.getElementById('nameInput3');
let newBookingPrice3 = document.getElementById('total3');

let newBookingName4 = document.getElementById('nameInput4');
let newBookingPrice4 = document.getElementById('total4');

let newBookingName5 = document.getElementById('nameInput5');
let newBookingPrice5 = document.getElementById('total5');

let newBookingName6 = document.getElementById('nameInput6');
let newBookingPrice6 = document.getElementById('total6');

let newBookingName7 = document.getElementById('nameInput7');
let newBookingPrice7 = document.getElementById('total7');

/*function getSelectValue1() {
    let filmTime1 = document.getElementById('movie1');
    let newBookingTime1 = filmTime1.options[filmTime1.selectedIndex].text;
    console.log(newBookingTime1)
  }*/

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
        let filmTime1 = document.getElementById('movie1');
        let newBookingTime1 = filmTime1.options[filmTime1.selectedIndex].text;
        console.log(newBookingTime1)


        let newBookingNameCreate = newBookingName1.value;
        let newBookingTimeCreate = newBookingTime1;
        let newBookingPriceCreate = newBookingPrice1.textContent;
        //
        console.log(newBookingTime1);
      
        let bookingData1 = {
            "film_Id": "1",
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
            
            })
            .catch(err => console.error(`error ${err}`));
            console.log(seatsIndex)
      };

//Film #2

function bookingFunction2() {
    
    const seats = document.querySelectorAll(".row2 .seat2:not(.occupied2)");
    const seatContainer = document.querySelector(".row-container2");

    const count1 = document.getElementById("count2");
   
    const movieSelect1 = document.getElementById("movie2");

    populateUI();

    let ticketPrice1 = +movieSelect1.value;


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
    total2.textContent = selectedSeatsCount * ticketPrice1;
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

const createBooking2 = () => {
        let filmTime2 = document.getElementById('movie2');
        let newBookingTime2 = filmTime2.options[filmTime2.selectedIndex].text;
        console.log(newBookingTime2)
        //let newBookingSeatCreate = newBookingSeat.value;
        let newBookingNameCreate = newBookingName2.value;
        let newBookingTimeCreate = newBookingTime2;
        let newBookingPriceCreate = newBookingPrice2.textContent;
        //
        console.log(newBookingTimeCreate);
      
        let bookingData2 = {
            "film_Id": "2",
            "bookingSeatNumber": JSON.stringify(seatsIndex),
            "bookingName": newBookingNameCreate,
            "bookingScreen":"2",
            "bookingTime": newBookingTimeCreate,
            "bookingPrice": newBookingPriceCreate
        }
        console.log(bookingData2)
      
        fetch(`${bookingUrl}/createBooking`, {
            method: "POST",
            body: JSON.stringify(bookingData2),
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

      function bookingFunction3() {
    
        const seats = document.querySelectorAll(".row3 .seat3:not(.occupied3)");
        const seatContainer = document.querySelector(".row-container3");
    
        const count3 = document.getElementById("count3");
       
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
        count3.textContent = selectedSeatsCount;
        total3.textContent = selectedSeatsCount * ticketPrice1;
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
            let filmTime3 = document.getElementById('movie3');
            let newBookingTime3 = filmTime3.options[filmTime3.selectedIndex].text;
            console.log(newBookingTime3)
            //let newBookingSeatCreate = newBookingSeat.value;
            let newBookingNameCreate = newBookingName3.value;
            let newBookingTimeCreate = newBookingTime3;
            let newBookingPriceCreate = newBookingPrice3.textContent;
            //
            console.log(newBookingTimeCreate);
          
            let bookingData3 = {
                "film_Id": "3",
                "bookingSeatNumber": JSON.stringify(seatsIndex),
                "bookingName": newBookingNameCreate,
                "bookingScreen":"3",
                "bookingTime": newBookingTimeCreate,
                "bookingPrice": newBookingPriceCreate
            }
            console.log(bookingData3)
          
            fetch(`${bookingUrl}/createBooking`, {
                method: "POST",
                body: JSON.stringify(bookingData3),
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


          function bookingFunction4() {
    
            const seats = document.querySelectorAll(".row4 .seat4:not(.occupied4)");
            const seatContainer = document.querySelector(".row-container4");
        
            const count4 = document.getElementById("count4");
           
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
            count4.textContent = selectedSeatsCount;
            total4.textContent = selectedSeatsCount * ticketPrice1;
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
                let filmTime4 = document.getElementById('movie4');
                let newBookingTime4 = filmTime4.options[filmTime4.selectedIndex].text;
                console.log(newBookingTime4)
                //let newBookingSeatCreate = newBookingSeat.value;
                let newBookingNameCreate = newBookingName4.value;
                let newBookingTimeCreate = newBookingTime4;
                let newBookingPriceCreate = newBookingPrice4.textContent;
                //
                console.log(newBookingTimeCreate);
              
                let bookingData4 = {
                    "film_Id": "4",
                    "bookingSeatNumber": JSON.stringify(seatsIndex),
                    "bookingName": newBookingNameCreate,
                    "bookingScreen":"4",
                    "bookingTime": newBookingTimeCreate,
                    "bookingPrice": newBookingPriceCreate
                }
                console.log(bookingData4)
              
                fetch(`${bookingUrl}/createBooking`, {
                    method: "POST",
                    body: JSON.stringify(bookingData4),
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


              function bookingFunction5() {
    
                const seats = document.querySelectorAll(".row5 .seat5:not(.occupied5)");
                const seatContainer = document.querySelector(".row-container5");
            
                const count5 = document.getElementById("count5");
               
                const movieSelect1 = document.getElementById("movie5");
            
                populateUI();
            
                let ticketPrice1 = +movieSelect1.value;
            
            
                // Save selected movie index and price
                function setMovieData(movieIndex, moviePrice) {
                localStorage.setItem("selectedMovieIndex", movieIndex);
                localStorage.setItem("selectedMoviePrice", moviePrice);
                }
            
                function updateSelectedCount() {
                const selectedSeats = document.querySelectorAll(".container5 .selected5");
            
                seatsIndex = [...selectedSeats].map(function(seat) {
                    return [...seats].indexOf(seat);
                });
            
                localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
            
                let selectedSeatsCount = selectedSeats.length;
                count5.textContent = selectedSeatsCount;
                total5.textContent = selectedSeatsCount * ticketPrice1;
                }
            
                // Get data from localstorage and populate
                function populateUI() {
                const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
            
                if (selectedSeats !== null && selectedSeats.length > 0) {
                    seats.forEach(function(seat, index) {
                    if (selectedSeats.indexOf(index) > -1) {
                        seat.classList.add("selected5");
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
                    e.target.classList.contains("seat5") &&
                    !e.target.classList.contains("occupied5")
                ) {
                    e.target.classList.toggle("selected5");
                    updateSelectedCount();
                }
                });
            
                // Initial count and total rendering
                updateSelectedCount();
            }
            
            const createBooking5 = () => {
                    let filmTime5 = document.getElementById('movie5');
                    let newBookingTime5 = filmTime5.options[filmTime5.selectedIndex].text;
                    console.log(newBookingTime5)
                    //let newBookingSeatCreate = newBookingSeat.value;
                    let newBookingNameCreate = newBookingName5.value;
                    let newBookingTimeCreate = newBookingTime5;
                    let newBookingPriceCreate = newBookingPrice5.textContent;
                    //
                    console.log(newBookingTimeCreate);
                  
                    let bookingData5 = {
                        "film_Id": "5",
                        "bookingSeatNumber": JSON.stringify(seatsIndex),
                        "bookingName": newBookingNameCreate,
                        "bookingScreen":"5",
                        "bookingTime": newBookingTimeCreate,
                        "bookingPrice": newBookingPriceCreate
                    }
                    console.log(bookingData5)
                  
                    fetch(`${bookingUrl}/createBooking`, {
                        method: "POST",
                        body: JSON.stringify(bookingData5),
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



                  function bookingFunction6() {
    
                    const seats = document.querySelectorAll(".row6 .seat6:not(.occupied6)");
                    const seatContainer = document.querySelector(".row-container6");
                
                    const count6 = document.getElementById("count6");
                   
                    const movieSelect1 = document.getElementById("movie6");
                
                    populateUI();
                
                    let ticketPrice1 = +movieSelect1.value;
                
                
                    // Save selected movie index and price
                    function setMovieData(movieIndex, moviePrice) {
                    localStorage.setItem("selectedMovieIndex", movieIndex);
                    localStorage.setItem("selectedMoviePrice", moviePrice);
                    }
                
                    function updateSelectedCount() {
                    const selectedSeats = document.querySelectorAll(".container6 .selected6");
                
                    seatsIndex = [...selectedSeats].map(function(seat) {
                        return [...seats].indexOf(seat);
                    });
                
                    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
                
                    let selectedSeatsCount = selectedSeats.length;
                    count6.textContent = selectedSeatsCount;
                    total6.textContent = selectedSeatsCount * ticketPrice1;
                    }
                
                    // Get data from localstorage and populate
                    function populateUI() {
                    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
                
                    if (selectedSeats !== null && selectedSeats.length > 0) {
                        seats.forEach(function(seat, index) {
                        if (selectedSeats.indexOf(index) > -1) {
                            seat.classList.add("selected6");
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
                        e.target.classList.contains("seat6") &&
                        !e.target.classList.contains("occupied6")
                    ) {
                        e.target.classList.toggle("selected6");
                        updateSelectedCount();
                    }
                    });
                
                    // Initial count and total rendering
                    updateSelectedCount();
                }
                
                const createBooking6 = () => {
                        let filmTime6 = document.getElementById('movie6');
                        let newBookingTime6 = filmTime6.options[filmTime6.selectedIndex].text;
                        console.log(newBookingTime6)
                        //let newBookingSeatCreate = newBookingSeat.value;
                        let newBookingNameCreate = newBookingName6.value;
                        let newBookingTimeCreate = newBookingTime6;
                        let newBookingPriceCreate = newBookingPrice6.textContent;
                        //
                        console.log(newBookingTimeCreate);
                      
                        let bookingData6 = {
                            "film_Id": "6",
                            "bookingSeatNumber": JSON.stringify(seatsIndex),
                            "bookingName": newBookingNameCreate,
                            "bookingScreen":"6",
                            "bookingTime": newBookingTimeCreate,
                            "bookingPrice": newBookingPriceCreate
                        }
                        console.log(bookingData6)
                      
                        fetch(`${bookingUrl}/createBooking`, {
                            method: "POST",
                            body: JSON.stringify(bookingData6),
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

                      function bookingFunction7() {
    
                        const seats = document.querySelectorAll(".row7 .seat7:not(.occupied7)");
                        const seatContainer = document.querySelector(".row-container7");
                    
                        const count7 = document.getElementById("count7");
                       
                        const movieSelect1 = document.getElementById("movie7");
                    
                        populateUI();
                    
                        let ticketPrice1 = +movieSelect1.value;
                    
                    
                        // Save selected movie index and price
                        function setMovieData(movieIndex, moviePrice) {
                        localStorage.setItem("selectedMovieIndex", movieIndex);
                        localStorage.setItem("selectedMoviePrice", moviePrice);
                        }
                    
                        function updateSelectedCount() {
                        const selectedSeats = document.querySelectorAll(".container7 .selected7");
                    
                        seatsIndex = [...selectedSeats].map(function(seat) {
                            return [...seats].indexOf(seat);
                        });
                    
                        localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
                    
                        let selectedSeatsCount = selectedSeats.length;
                        count7.textContent = selectedSeatsCount;
                        total7.textContent = selectedSeatsCount * ticketPrice1;
                        }
                    
                        // Get data from localstorage and populate
                        function populateUI() {
                        const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
                    
                        if (selectedSeats !== null && selectedSeats.length > 0) {
                            seats.forEach(function(seat, index) {
                            if (selectedSeats.indexOf(index) > -1) {
                                seat.classList.add("selected7");
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
                            e.target.classList.contains("seat7") &&
                            !e.target.classList.contains("occupied7")
                        ) {
                            e.target.classList.toggle("selected7");
                            updateSelectedCount();
                        }
                        });
                    
                        // Initial count and total rendering
                        updateSelectedCount();
                    }
                    
                    const createBooking7 = () => {
                            let filmTime7 = document.getElementById('movie7');
                            let newBookingTime7 = filmTime7.options[filmTime7.selectedIndex].text;
                            console.log(newBookingTime7)
                            //let newBookingSeatCreate = newBookingSeat.value;
                            let newBookingNameCreate = newBookingName7.value;
                            let newBookingTimeCreate = newBookingTime7;
                            let newBookingPriceCreate = newBookingPrice7.textContent;
                            //
                            console.log(newBookingTimeCreate);
                          
                            let bookingData7 = {
                                "film_Id": "7",
                                "bookingSeatNumber": JSON.stringify(seatsIndex),
                                "bookingName": newBookingNameCreate,
                                "bookingScreen":"7",
                                "bookingTime": newBookingTimeCreate,
                                "bookingPrice": newBookingPriceCreate
                            }
                            console.log(bookingData7)
                          
                            fetch(`${bookingUrl}/createBooking`, {
                                method: "POST",
                                body: JSON.stringify(bookingData7),
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