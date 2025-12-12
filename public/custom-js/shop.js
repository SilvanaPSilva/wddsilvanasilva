// shop.js

// document.getElementById('addtocart').addEventListener('click', () => {

//     var total=localStorage.getItem('checkout');
//     total++;
//     localStorage.setItem('checkout',total);
//     document.querySelector('#checkout').innerHTML=total;
// })

let allButtons = document.querySelectorAll('.btn-primary');

allButtons.forEach(button => {
    button.addEventListener('click', addProduct);  


});

// 1 get saved total from localstorage
// 2 add one to the total
// 3 save the total back to localstorage
// 4 update the display on the page

function addProduct(event) {

    event.preventDefault();
    localStorage.getItem('Cart');
    
    let basketCount = localStorage.getItem('Cart');
    basketCount++;
    console.log(basketCount);
    localStorage.setItem('Cart', basketCount);
    
    let updatebasket = document.getElementById("addBasket");

    updatebasket.innerHTML = basketCount;
    
    // localStorage.setItem('checkout',total);
    // document.querySelector('#checkout').innerHTML=total;


}


/*
1 - Select all button
2-  WHEN Click on ANY button
3 - THEN Count++ 
4 - NEXT display change
 */

