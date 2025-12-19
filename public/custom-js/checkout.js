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
//Check Login or Not
(async () => {
    let totalPrice = 0;

    let isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === '0') {
        window.location.href = "/login";  // redirect to login page
    }

    //Check CVV
    let checkCVV = document.getElementById("cardCvv")
    let buttonBuy = document.getElementById("buy-now")

    buttonBuy.addEventListener("click", (event) => {
        event.preventDefault()
        if (checkCVV.value === "123") {
            console.log("CVV is valid")
        } else {
            console.log("CVV is invalid")
        }
    })

    //BuyNow button
    let checkout = document.getElementById('buy-now');
    // add a listener for add to cart if such a button id is pressed
    let paymentFailure = document.getElementById("payment-failure");
    paymentFailure.style.display = 'none';
    let paymentSucessful = document.getElementById("payment-success");
    paymentSucessful.style.display = 'none';


    // add a listener so that we run this code and preventdefault for submit...
    checkout.addEventListener("click", (event) => {
        event.preventDefault();
        let cardNumber = document.getElementById('cardNumber').value;
        let cardCvv = document.getElementById('cardCvv').value;

        if (cardNumber == "1234 5678 9102 3456" && cardCvv == "123") {
            alert("Payment success");

            //element.classList.add("d-none"); // bootstrap hide
            var statusPayment = document.getElementById("payment-failure");
            statusPayment.style.display = 'none';

            //element.classList.remove("d-none"); // bootstrap hide
            var statusPayment = document.getElementById("payment-success");
            statusPayment.style.display = 'block';

            // now set cart total to zero
            totalPrice = 0;
            // makes sure that when we got another page the count is 0     
            localStorage.setItem('Cart', '0');
            // clear the cart
            localStorage.setItem('addProd', '[]');

            //redirect to thank_you page
            window.location.href = "/thank_you"

        } else {
            alert("Payment failure");
            var statusPayment = document.getElementById("payment-failure");
            statusPayment.style.display = 'block';

            var statusPayment = document.getElementById("payment-success");
            statusPayment.style.display = 'none';

            //element.classList.add("d-none");
            var statusPayment = document.getElementById("payment-failure");
            //element.classList.remove("d-none"); 
        }

    })

    let totalLabel = document.getElementById('total');
    
    if (localStorage.getItem('addProd') !== null) {
        

        //Get string from LocalStore
        let storedAddProd = localStorage.getItem('addProd')

        // Split the string
        let splitStoredAddProd = storedAddProd.split(',')

        console.log("Products in the cart: ", splitStoredAddProd);

        //1 - Variable
        const response = await fetch('items.json') // 2 - FETCH
        const data = await response.json()
        console.log(data)
        console.log(data.products)

        data.products.forEach(productSil => {
            //Check if product id is in the splitStoredAddProd array

            

            if (splitStoredAddProd.includes(productSil.product_id.toString())) {
                // add to total price
                totalPrice += Number(productSil.price);
                

                console.log("Product added to cart:", productSil.product_name);

                // 1 - get the element where we will append the shop items
                let checkoutSil = document.getElementById('checkout-items');

                // 2 - create elements
                let divRow = document.createElement('div');
                let divColumn = document.createElement('div');
                let divCard = document.createElement('div');
                let img = document.createElement('img');
                let divBody = document.createElement('div');
                let productName = document.createElement('h5');
                let pDescription = document.createElement('p');
                let pPrice = document.createElement('p');

                // 3 - set attributes and content
                divRow.setAttribute('class', 'row mb-3');
                divColumn.setAttribute('class', 'col-md-4');
                divCard.setAttribute('class', 'card h-100 bg-light shadow-lg rounded');
                img.setAttribute('class', 'card-img-top');
                img.setAttribute('src', productSil.img);
                divBody.setAttribute('class', 'card-body');
                productName.setAttribute('class', 'card-title');
                productName.innerText = productSil.product_name;
                pDescription.setAttribute('class', 'card-text');
                pDescription.innerText = productSil.desc;
                pPrice.setAttribute('class', 'card-text fw-bold text-primary');
                pPrice.innerText = '€' + productSil.price.toFixed(2);

                // 4 - append children
                divBody.appendChild(productName);
                divBody.appendChild(pDescription);
                divBody.appendChild(pPrice);
                divCard.appendChild(img);
                divCard.appendChild(divBody);
                divColumn.appendChild(divCard);
                divRow.appendChild(divColumn);

                // 5 - Appedn Child
                checkoutSil.appendChild(divRow);
            // 2 - create elements
            // 3 - set attributes and content
            // 4 - append children
            // 5 - Appedn Child
            }
            totalLabel.innerText = '€' + totalPrice.toFixed(2);
        })
    }


})();

