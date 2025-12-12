// custom.js 
// some basic functionality for login, checkout, userdetails
// amend and supplement in your project as you see fit

// check if user is logged in or logged out..

let statusUserLogin = document.getElementById("status");
let loggedin = localStorage.getItem('loggedIn'); // 1 or 0

// if(loggedin==null){
//     localStorage.setItem('loggedIn','0');
    
// } else

// 1 create new item IF ITS NULL in local storage - count of  items in cart
// 2 we will get this count from local storage
// display count in checkout span

/* 
1 Give element id
2 add eventelistener (action)
3 inneer function (what to do when action happens)
4 sign basket count for the element
.. */

let basketCount = localStorage.getItem("Cart")

let updatebasket = document.getElementById("addBasket");
console.log(updatebasket);


if(basketCount == null || basketCount == 'undefined'){ 
    localStorage.setItem("Cart",'0');    
}

updatebasket.innerHTML = basketCount;










// >>>>>>>>>>>>>>>>>>>>>>>attencion for this part
statusUserLogin.addEventListener('click', handleStatus);

function handleStatus(event) {
    event.preventDefault();
 if (loggedin==='1'){
    localStorage.setItem('loggedIn','0');
    statusUserLogin.innerHTML="Login";
    window.location.href = "/";

} else {
    window.location.href = "/login";
}
}




//null>>default page
checkLoginStatus()

// set the checkout figure
// if (localStorage.getItem('checkout') == null) {  
//     localStorage.setItem('checkout',0);
// }
// var checkout=localStorage.getItem('checkout');
// /* document.querySelector('#checkout').innerHTML=checkout; */
// // document.getElementById('checkout');

// // run to update login/
// var logout = document.getElementById('loginlogout');

// // add a listener for add to cart if such a button id is pressed
// document.getElementById('loginlogout').addEventListener('click', (event) => {

//     // if user is logged in them log them out and redirect to home page
//     var loggedin=localStorage.getItem('loggedIn'); 

//     if (loggedin==1) {
//         localStorage.setItem('loggedIn',0);
//         window.location.href = "home.html";
//     } else {
//         window.location.href = "login.html";
//     }
// })


// Show de user details section if is logged in and hide if not logged in
function checkLoginStatus() {
    
    let userDetail = document.getElementById("details");
    let statusUser = document.getElementById("status");

   
    if (loggedin==='1') {
        //change the text from Login to Logout
        userDetail.classList.add("d-show");
        userDetail.classList.remove("d-none");
        statusUser.innerHTML="Logout";
              
        // show user details section
    } else{

        userDetail.classList.add("d-none");
        userDetail.classList.remove("d-show");
        statusUser.innerHTML="Login";
        // don't show user details section
        // document.querySelector('')
        // document.
        // use add to hide the display of User Details
        //element.classList.add("d-none");        
        //element.classList.remove("d-show");
        // document.querySelector('#loginlogout').innerHTML="Login"; 
        // element = document.getElementById("loginlogout");
        // element.setAttribute("href", "login.html");
        // var element = document.getElementById("userdetails");
        // element.style.display = 'none';
    } 

}


// document.querySelector('#loginlogout').innerHTML="Logout";
        // element.classList.remove("d-none");        
        // element.classList.add("d-show");



