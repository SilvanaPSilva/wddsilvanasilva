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

function addProduct(event) {

    event.preventDefault();
    console.log("Button clicked");

}


/*
1 - Select all button
2-  WHEN Click on ANY button
3 - THEN Count++ 
4 - NEXT display change
 */

