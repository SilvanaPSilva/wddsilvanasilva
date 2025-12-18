// shop.js

// document.getElementById('addtocart').addEventListener('click', () => {

//     var total=localStorage.getItem('checkout');
//     total++;
//     localStorage.setItem('checkout',total);
//     document.querySelector('#checkout').innerHTML=total;
// })
(async () => {
    const response = await fetch('items.json')
    const data = await response.json()
    console.log(data)
    console.log(data.products)
     
    /*  renderCards(data, catalogueContainer, row); */
  
    /* document.getElementById("shopSil") */
    let shopTroller = document.getElementById("shopSil")
    

    //Get our main container (shopSil) for all cards
    data.products.forEach(productSil => {
    
    const div = document.createElement("div")  

    const img = document.createElement("img")
    const divBody = document.createElement("div")
    const h5 = document.createElement("h5")
    const pDescription = document.createElement("p")
    const pPrice = document.createElement("p")
    const button = document.createElement("button")
    
    div.classList.add('card')
    img.classList.add('card-img-top')
    divBody.classList.add('card-body')
    h5.classList.add('card-title')
    pDescription.classList.add('card-text')
    pPrice.classList.add('card-text','fw-bold', 'text-primary')
    button.classList.add('btn', 'btn-primary')
        
});



})();

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
    // console.log(basketCount);
    localStorage.setItem('Cart', basketCount);
    
    let updatebasket = document.getElementById("addBasket");

    updatebasket.innerHTML = basketCount;
    
    localStorage.setItem('checkout',total);
    
    document.querySelector('#checkout').innerHTML=total;


}


/*
1 - Select all button
2-  WHEN Click on ANY button
3 - THEN Count++ 
4 - NEXT display change
 */

