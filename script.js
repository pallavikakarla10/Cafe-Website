// ================= CONTACT FORM =================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let isValid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                isValid = false;

            }

        });


        if (isValid) {

            alert(
                "✅ Thank you for contacting Aroma Café!\nWe'll get back to you soon."
            );

            form.reset();

        }

        else {

            alert("⚠ Please fill in all the fields.");

        }

    });

}


// ================= VIEW MENU BUTTON =================

const menuBtn = document.querySelector(".menu-btn");

if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        window.location.href = "menu.html";

    });

}


// ================= BOOK TABLE BUTTON =================

const bookBtn = document.querySelector(".book-btn");

if (bookBtn) {

    bookBtn.addEventListener("click", function () {

        window.location.href = "reservation.html";

    });

}


// ================= RESERVATION FORM =================

const reservationForm = document.querySelector("#reservationForm");
const dateInput = document.querySelector("#date");

if (dateInput) {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;

}

if (reservationForm) {

    reservationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();

        const phone = document.querySelector("#phone").value.trim();

        const date = document.querySelector("#date").value;

        const time = document.querySelector("#time").value;
        // Check café opening hours

const selectedTime = time;

if (selectedTime < "09:00" || selectedTime > "22:00") {

    alert("⚠ Please select a time between 9:00 AM and 10:00 PM.");

    return;

}

        const guests = document.querySelector("#guests").value;


        if (
    name === "" ||
    phone === "" ||
    date === "" ||
    time === "" ||
    guests === ""
) {

    alert("⚠ Please fill in all the required fields.");

    return;

}


// Check if selected date is in the past

const today = new Date();
today.setHours(0, 0, 0, 0);

const selectedDate = new Date(date);
selectedDate.setHours(0, 0, 0, 0);


if (selectedDate < today) {

    alert("⚠ Please select today or a future date.");

    return;

}


        const successMessage =
            document.querySelector("#successMessage");

        const reservationSuccess =
            document.querySelector("#reservationSuccess");


       successMessage.textContent =
    "Thank you, " + name + "!";
    
document.querySelector("#successDate").textContent = date;

document.querySelector("#successTime").textContent = time;

document.querySelector("#successGuests").textContent =
    guests + (guests === "1" ? " Guest" : " Guests");

        reservationSuccess.style.display = "block";


        reservationForm.reset();

    });

}// =========================
//       BACK TO TOP
// =========================

const backToTop = document.querySelector("#backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            backToTop.style.display = "flex";

        } else {

            backToTop.style.display = "none";

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}