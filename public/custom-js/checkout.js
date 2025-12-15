// checkout.js
/* 
cant go to checkout if not logged in ok
If correct detail
1 - Input card data
2 - Click button buyIt
3 - Go to Page TkankYou

if is not
backt to infomaticon detail
Display incorrect data

*/

let isLoggedIn = localStorage.getItem('loggedIn');
if (isLoggedIn === '0') {
    window.location.href = "/login";  // redirect to login page
}

let checkCVV = document.getElementById("cardCvv")
let buttonBuy = document.getElementById("buy-now")

buttonBuy.addEventListener("click", (event) => {
    event.preventDefault()
    if (checkCVV.value === "123") {
        console.log("CVV is valid")
    } else {
        console.log("CVV is invalid")
    }
})

let checkout = document.getElementById('buy-now');
// add a listener for add to cart if such a button id is pressed
let paymentFailure = document.getElementById("payment-failure");
paymentFailure.style.display = 'none';
let paymentSucessful = document.getElementById("payment-success");
paymentSucessful.style.display = 'none';

/* var isLoggedIn=localStorage.getItem('loggedIn'); 
if (isLoggedIn==0) {
    window.location.href = "login.html";  // redirect to login page
} */
// add a listener so that we run this code and preventdefault for submit...
checkout.addEventListener("click", (event) => {
    event.preventDefault();
    let cardNumber = document.getElementById('cardNumber').value;
    let cardCvv = document.getElementById('cardCvv').value;

    if (cardNumber == "1234 5678 9102 3456" && cardCvv == "123") {
        alert("Payment success");

        //element.classList.add("d-none"); // bootstrap hide
        var statusPayment = document.getElementById("payment-failure");
        statusPayment.style.display = 'none';

        //element.classList.remove("d-none"); // bootstrap hide
        var statusPayment = document.getElementById("payment-success");
        statusPayment.style.display = 'block';

        // now set cart total to zero
        var total = 0;
        // makes sure that when we got another page the total is zero         
        localStorage.setItem('checkout', total);

        //redirect to thank_you page
        window.location.href = "/thank_you"

    } else {
        alert("Payment failure");
        var statusPayment = document.getElementById("payment-failure");
        statusPayment.style.display = 'block';

        var statusPayment = document.getElementById("payment-success");
        statusPayment.style.display = 'none';

        //element.classList.add("d-none");
        var statusPayment = document.getElementById("payment-failure");
        //element.classList.remove("d-none"); 
    }

})


