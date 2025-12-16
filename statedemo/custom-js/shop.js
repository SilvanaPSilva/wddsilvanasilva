// shop.js

document.getElementById('addtocart').addEventListener('click', () => {

    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('#checkout').innerHTML=total;
})

let allButtons = document.querySelectorAll('.btn-primary')
allButtons.forEach(button=>{
    button.addEventListener('click', addProduct);
});

function addProduct(event) {
    event.preventDefault();

    const card = event.target.closest(".card")

    const product = {
    product_name: card.querySelector(".card-title").innerText,
    desc: card.querySelector(".card-text").innerText,
    price: parseFloat(card.querySelector(".fw-bold.text-primary").innerText.replace("€","")),
    img: card.querySelector(".card-img-top").getAttribute("src")
}

let cart = JASON.parse(localStorage.getItem("Cart")) || [];
cart.push(product)

localStorage.getItem("Cart", JASON.stringify(cart));

let updatebasket = document.getElementById("addBasket")
    if(updatebasket){
        updatebasket.innerHTML = cart.length;
    }

    console.log("Addicionaed Produc", product)
}
