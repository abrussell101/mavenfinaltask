let carts = document.querySelectorAll('.add-cart');

let product = [
    {
        name: 'Full Stack Dev',
        tag: 'fullstackdev',
        price: 26000,
        inCart: 0
    },
    {
        name: 'Front End Dev',
        tag: 'frontenddev',
        price: 10000,
        inCart: 0
    },
    {
        name: 'Spring Boot Dev',
        tag: 'springbootdev',
        price: 15000,
        inCart: 0
    }

]

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener ('click' , () => {
        cartNumbers(product[i]);
        totalCost(product[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem ('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}




function cartNumbers(product) {
    let productNumbers = localStorage.getItem ('cartNumbers');
    
    productNumbers = parseInt (productNumbers);

   if(productNumbers) {
        localStorage.setItem ('cartNumbers', productNumbers + 1);
        document.querySelector ('.cart span').textContent = productNumbers + 1;
   } else {
        localStorage.setItem ('cartNumbers', 1);
        document.querySelector ('.cart span').textContent = 1;
   }
  
   setItems(product);
     
}

function setItems(product) {
    let cartItem = localStorage.getItem('productsInCart');
    cartItem = JSON.parse(cartItem);
   
    if (cartItem != null) {
        if(cartItem[product.tag] == undefined) {
            cartItem = {
                ...cartItem,
                [product.tag]: product
            }
        }
        cartItem[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItem = {
            [product.tag]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify (cartItem));
}


function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    console.log('My cartCost is' , cartCost);
    console.log(typeof cartCost );

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost' , cartCost + product.price);
    }
    else {
        localStorage.setItem('totalCost' , product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector ('.products');
    if ( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class='products'>
                <ion-icon name="trash"></ion-icon>
                <img src='./images/${item.tag}.png' class='img-fluid'>
                <span>${item.name}</span>
            </div>
            <div class='price'>${item.price}</div>
            <div class='quantity'>
                <ion-icon name="arrow-back"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="arrow-forward"></ion-icon>
            </div>
            `
        })
    }
}


onLoadCartNumbers();
displayCart();