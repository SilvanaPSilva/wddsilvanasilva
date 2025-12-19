
let statusUserLogin = document.getElementById("status");
let loggedin = localStorage.getItem('loggedIn'); // 1 or 0


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
      
    } 

}





