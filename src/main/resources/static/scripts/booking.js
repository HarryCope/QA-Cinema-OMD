const bookingUrlBook = "http://localhost:8081/Booking";

fetch(`${bookingUrlBook}/getBooking`)
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
        let mainContainer = document.getElementById("bookingDataList");
        for (let i = 0; i < bookingData1.length; i++) {
            let div = document.createElement("div");
              div.innerHTML = '<div style="padding-top:40px;"> Booking ID: ' + bookingData1[i].booking_Id +' </div><div>Film ID: ' + bookingData1[i].film_Id + '</div>' + ' Seat Numbers: ' + bookingData1[i].bookingSeatNumber + ' <div>Name: ' + bookingData1[i].bookingName + '</div>' + ' Screen Number: ' + bookingData1[i].bookingScreen + '  &nbsp &nbspBooking Time: ' 
              + bookingData1[i].bookingTime + '<div> Price: £' + bookingData1[i].bookingPrice + '</div> <div style="padding-bottom:20px;"><button id="update' + bookingData1[i].booking_Id + '" type="button" class="btn btn-secondary">Update</button> <button value= ';bookingData1[i].booking_Id + ' onclick=';deleteBooking(this.value) + ' id="delete' + bookingData1[i].booking_Id + '" type="button" class="btn btn-secondary">Delete</button></div>';
              mainContainer.appendChild(div);
        }
}

const deleteBooking = (value) => {
    const editPokemonId = editPokemonSelect.value;

    fetch(`${bookingUrlBook}/deleteBooking/${editPokemonId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => console.log(response))
    .then(() => {
        console.log("Delete successful");
        refresh();
    })
    .catch(err => console.error(`error ${err}`));
}