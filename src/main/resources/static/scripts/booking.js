const bookingUrl = "http://localhost:8081/Booking";

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
          let mainContainer = document.getElementById("bookingDataList");
          for (let i = 0; i < bookingData1.length; i++) {
              let div = document.createElement("div");
              div.innerHTML = 'Booking id: ' + bookingData1[i].booking_Id +'Film id: ' + bookingData1[i].film_Id + 'Seat number: ' + bookingData1[i].bookingSeatNumber + 'Name: ' + bookingData1[i].bookingName + 'Screen number: ' + bookingData1[i].bookingScreen + 'Booking time: ' + bookingData1[i].bookingTime + 'Price: ' + bookingData1[i].bookingPrice;
              mainContainer.appendChild(div);
          }
    }
