const bookingUrlBook = "http://localhost:8081/Booking";
let bookingID;
const editBookingName = document.getElementById('updatedBookingName');
const editBookingTime = document.getElementById('updatedBookingTime');
const editBookingSelect = document.getElementById('updatedBookingId');

const editBookingFilmId = document.getElementById('updatedBookingFilmId');
const editBookingSeatNumber = document.getElementById('updatedBookingSeatNumber');
const editBookingScreen = document.getElementById('updatedBookingScreen');
const editBookingPrice = document.getElementById('updatedBookingPrice');
console.log(editBookingSelect)

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
                + bookingData1[i].bookingTime + '<div> Price: £' + bookingData1[i].bookingPrice + '</div> <div style="padding-bottom:20px;"> <button  onclick="deleteBooking(this.value)" value="' + bookingData1[i].booking_Id + '" id="delete' + bookingData1[i].booking_Id + '" type="button" class="btn btn-secondary">Delete</button></div>';
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
        window.location.reload();
    })
    .catch(err => console.error(`error ${err}`));
}

const updateBooking = () => {
    
    const editBookingSelectId = editBookingSelect.value;
    const updateFilmBookingId = editBookingFilmId.value;
    const updateBookingSeatNumber = editBookingSeatNumber.value;
    const updateBookingName = editBookingName.value;
    const updateBookingScreen = editBookingScreen.value;
    const updateBookingTime = editBookingTime.value;
    const updateBookingPrice = editBookingPrice.value;

    console.log(updateBookingTime);
    let bookingData1 = {
        "film_Id": updateFilmBookingId,
        "bookingSeatNumber": updateBookingSeatNumber,
        "bookingName": updateBookingName,
        "bookingScreen": updateBookingScreen,
        "bookingTime": updateBookingTime,
        "bookingPrice": updateBookingPrice
    }

    fetch(`${bookingUrlBook}/updateBooking/${editBookingSelectId}`, {
        method: "PUT",
        body: JSON.stringify(bookingData1),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(model => {
            console.log(model)
            window.location.reload();
        })
        .catch(err => console.error(`error ${err}`));
};
