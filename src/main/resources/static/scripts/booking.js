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
                `<div class="col-6 col-lg-12">
                    <div class="modal fade" id="updateBookingModal" tabindex="-1" aria-labelledby="bookingModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="bookingModalLabel" style="color: black;">Update Booking</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="container-fluid">
                                        <form>
                                            <label for="updatedBookingName" class="form-label mt-2" style="color: black;">New Name</label>
                                            <input type="text" class="form-control" id="updatedPokemonName">
                                            <label for="updatedBookingTime" class="form-label mt-2" style="color: black;">New Time</label>
                                            <input type="text" class="form-control" id="updatedPokemonName">
                                        </form>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-outline-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" id=" " onclick="updateBooking()"
                                        data-bs-dismiss="modal">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>`
                mainContainer.appendChild(div);

            }
            
}

`<div class="col-6 col-lg-12">


<div class="modal fade" id="updateBookingModal" tabindex="-1" aria-labelledby="bookingModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="bookingModalLabel" style="color: black;">Update Booking</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <form>
                        <label for="updatedBookingName" class="form-label mt-2" style="color: black;">New Name</label>
                        <input type="text" class="form-control" id="updatedPokemonName">
                        <label for="updatedBookingTime" class="form-label mt-2" style="color: black;">New Time</label>
                        <input type="text" class="form-control" id="updatedPokemonName">
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary"
                    data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id=" " onclick="updateBooking()"
                    data-bs-dismiss="modal">Update</button>
            </div>
        </div>
    </div>
</div>

</div>`




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

