console.log("login.js loaded");

document.getElementById('user-login').addEventListener('submit',LoginSubmit);

function LoginSubmit(event) {
    var email = document.getElementById('emailAddressID').value;
    var password= document.getElementById('passwordID').value;
    if (email==="your_email_here@email.com" && password==="12345678") {   
        // successful login, user redirected to shop.html
        localStorage.setItem('loggedIn',"1");    
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


