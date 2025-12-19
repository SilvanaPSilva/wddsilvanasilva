// shop.js

/* document.getElementById('addtocart').addEventListener('click', () => {

var total=localStorage.getItem('checkout');
total++;
localStorage.setItem('checkout',total);
document.querySelector('#checkout').innerHTML=total;
}) */



(async () => {
    //1 - Variable
    const response = await fetch('items.json') // 2 - FETCH
    const data = await response.json()
    console.log(data)
    console.log(data.products)

    /*  renderCards(data, catalogueContainer, row); */

    //3 - Get Container 
    /* document.getElementById("shopSil") */
    let shopSil = document.getElementById("shopSil")

    // 4 - FOREACH
    //Get our main container (shopSil) for all cards
    data.products.forEach(productSil => {

        const divColumn = document.createElement("div") // <div></div>
        divColumn.classList.add('col')
        

        // Step 4_1 - Creating all the required for elements
        const divCard = document.createElement("div") // <div></div>
        const img = document.createElement("img")         // <img src="" alt="">
        const divBody = document.createElement("div")
        const productName = document.createElement("h5")
        const pDescription = document.createElement("p")
        const pPrice = document.createElement("p")
        const button = document.createElement("button")  
         


        // Step 4-2 - Element x Boostrap (Styling elements)
        divCard.classList.add('card') // <div class='card'></div> 
        img.classList.add('card-img-top', 'w-100', 'd-block', 'object-fit-cover') // <img class='card-img-top' src="" alt="">
        img.style.height = "250px"; // Recommended for e-commerce
        divBody.classList.add('card-body')
        productName.classList.add('card-title')
        pDescription.classList.add('card-text')
        pPrice.classList.add('card-text', 'fw-bold', 'text-primary')
        button.classList.add('btn', 'btn-primary')

        // Step 4_3 Element =  JSON (Link)
        if (typeof (productSil.img) !== 'undefined' && productSil.img.length !== 0 && productSil.img !== "unknown") {
            img.src = productSil.img
            // <img class='card-img-top' src="images/wdbundoransouvenir.jpg" alt="">            
        }

        if (typeof (productSil.alt) !== 'undefined' && productSil.alt.length !== 0 && productSil.alt !== "unknown") {
            img.alt = productSil.alt
            // <img class='card-img-top' src="images/wdbundoransouvenir.jpg" alt="">            
        }

        if (typeof (productSil.desc) !== 'undefined' && productSil.desc.length !== 0 && productSil.desc !== "unknown") {
            pDescription.innerHTML = productSil.desc;
        }

        if (typeof (productSil.price) !== 'undefined' && productSil.price.length !== 0 && productSil.price !== "unknown") {
            pPrice.innerHTML = productSil.price;
        }

        if (typeof (productSil.product_name) !== 'undefined' && productSil.product_name.length !== 0 && productSil.product_name !== "unknown") {
            productName.innerHTML = productSil.product_name;
        }

        button.innerHTML = "Add to Cart"

        button.id = productSil.product_id // every button has id (from json)


        //5 - Appedn Child

        shopSil.appendChild(divColumn)       
        divColumn.appendChild(divCard)

        divCard.appendChild(img)
        divCard.appendChild(divBody)
        divBody.appendChild(productName)
        divBody.appendChild(pDescription)
        divBody.appendChild(pPrice)
        divBody.appendChild(button)
        

    });

    let allButtons = document.querySelectorAll('.btn-primary');
    allButtons.forEach(button => {
        button.addEventListener('click', addProduct);
    });

})();// CALL ASYNC FUCTION --- END FUNCTION
// 1 get saved total from localstorage
// 2 add one to the total
// 3 save the total back to localstorage
// 4 update the display on the page

function addProduct(event) {
    event.preventDefault();

    console.log(event.target);

    localStorage.getItem('Cart');
    let basketCount = localStorage.getItem('Cart');
    basketCount++;
    // console.log(basketCount);
    localStorage.setItem('Cart', basketCount);

    let updatebasket = document.getElementById("addBasket");
    updatebasket.innerHTML = basketCount;

    // localStorage.setItem('checkout', total);
    // document.querySelector('#checkout').innerHTML = total;

    if(localStorage.getItem('addProd') === null || localStorage.getItem('addProd')===''){
        let addProdNew=[]
        addProdNew.push(event.target.id)
        localStorage.setItem('addProd', addProdNew.toString())
    } else{

        //Get string from LocalStore
       let storedAddProd = localStorage.getItem('addProd')
        
       // Split the string
       let splitStoredAddProd = storedAddProd.split(',')
        // Pust itm to array
       splitStoredAddProd.push(event.target.id)
        //Array ==>> "[5, 4, 3]" >> back to string
       localStorage.setItem('addProd', splitStoredAddProd.toString())

    }


}



