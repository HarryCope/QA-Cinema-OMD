const bookingUrlBook = "http://localhost:8081/Booking";
let bookingID;
const editBookingName = document.getElementById('');
const editBookingTime = document.getElementById('');


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
                + bookingData1[i].bookingTime + '<div> Price: £' + bookingData1[i].bookingPrice + '</div> <div style="padding-bottom:20px;"><button data-bs-toggle="modal" data-bs-target="#updateBookingModal" onclick="updateBooking(this.value)" value="' + bookingData1[i].booking_Id + '" id="update' + bookingData1[i].booking_Id + 
                '" type="button" class="btn btn-secondary">Update</button> <button  onclick="deleteBooking(this.value)" value="' + bookingData1[i].booking_Id + '" id="delete' + bookingData1[i].booking_Id + '" type="button" class="btn btn-secondary">Delete</button></div>';
                mainContainer.appendChild(div);

            }
            
}

const deleteBooking = (val) => {
    let bookingID = val;
    fetch(`${bookingUrlBook}/deleteBooking/${bookingID}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => console.log(response))
    .then(() => {
        console.log("Delete successful");
    })
    .catch(err => console.error(`error ${err}`));
}

const updateBooking = (val) => {
    let bookingID = val;
    const editBookingName = editBookingName.value;
    const editBookingTime = editBookingTime.value;

    let bookingData1 = {
        "bookingName": editBookingName,
        "bookingTime": editBookingTime,
    }

    fetch(`${bookingUrlBook}/updateBooking/${bookingID}`, {
        method: "PUT",
        body: JSON.stringify(bookingData1),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(model => {
            console.log(model)
        })
        .catch(err => console.error(`error ${err}`));
};

