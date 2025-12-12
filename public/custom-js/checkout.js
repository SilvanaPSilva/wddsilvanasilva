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

let isLoggedIn=localStorage.getItem('loggedIn'); 
if (isLoggedIn==='0') {
    window.location.href = "/login";  // redirect to login page
}



var checkout = document.getElementById('buy-now');
// add a listener for add to cart if such a button id is pressed
var element = document.getElementById("payment-failure");
element.style.display = 'none';
var element = document.getElementById("payment-success");
element.style.display = 'none';

/* var isLoggedIn=localStorage.getItem('loggedIn'); 
if (isLoggedIn==0) {
    window.location.href = "login.html";  // redirect to login page
} */
// add a listener so that we run this code and preventdefault for submit...
checkout.addEventListener("click", (event) => {
    event.preventDefault();
    var cardnumber=document.getElementById('cardNumber').value;
    var cardcvv=document.getElementById('cardCvv').value;

    if (cardnumber=="1234 5678 9102 3456" && cardcvv=="123") {
        alert("payment success");
        var element = document.getElementById("payment-failure");
        element.style.display = 'none';
        //element.classList.add("d-none"); // bootstrap hide
        var element = document.getElementById("payment-success");
        element.style.display = 'block';
        //element.classList.remove("d-none"); // bootstrap hide
        // now set cart total to zero
        var total=0;
        // makes sure that when we goto another page the total is zero 
        localStorage.setItem('checkout',total); 

    } else {
        alert("payment failure");
        var element = document.getElementById("payment-failure");
        element.style.display = 'block';
        var element = document.getElementById("payment-success");
        element.style.display = 'none';
        //element.classList.add("d-none");
        var element = document.getElementById("payment-failure");
        //element.classList.remove("d-none");
 
    }


    
    
})


