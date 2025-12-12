console.log("login.js loaded");

let form = document.getElementById('user-login');
form.addEventListener('submit', LoginSubmit);

function LoginSubmit(event) {

    event.preventDefault();

    var email = document.getElementById('emailAddressID').value;
    var password = document.getElementById('passwordID').value;
    if (email === "your_email_here@email.com" && password === "12345678") {
        // successful login, user redirected to shop.html
        localStorage.setItem('loggedIn', "1"); // set loggedIn to 1 (true)
        //loadNode();
        window.location.href = "/buyIt";  // redirect to shop page (buyIt)
        statusUser.innerHTML="Logout";      

    }
    else {
        alert("Invalid login details.\n The username or password is incorrect.");
        // login unsuccessful, error message appears
        localStorage.setItem('loggedIn', '0'); // set loggedIn to 0 (false)
         statusUser.innerHTML="Login";

        // var element = document.getElementById("loginerror"); is not used

       
        // element.classList.remove("d-none");
        // element.classList.remove("d-block");
    }
    
    //> <a href="/login">Forgot
                //   your
                //   password?</a>
};











/* document.getElementById('user-login').addEventListener('submit', (event) => {
// wait for submit button to be clicked on login form - 
  // this code only invoked if login form submit button clicked

  var email = document.getElementById('emailAddressID').value;
  var password= document.getElementById('passwordID').value;
  if (email==="your_email_here@email.com" && password==="12345678") {   
      // successful login, user redirected to shop.html
      localStorage.setItem('loggedIn',1);    
      window.location.href = "shop.html";  // redirect to shop page
  }
  else {
      alert("invalid login details");
      // login unsuccessful, error message appears
      localStorage.setItem('loggedIn',0);
      var element = document.getElementById("loginerror");
     // element.classList.remove("d-none");
     // element.classList.remove("d-block");
  }
  event.preventDefault();
}); */


