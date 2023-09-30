const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

const  cart = []; 

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get(‘roll’);

const pName = document.querySelector('product-name'); 
pName.innerText = rollType; 
const pPrice = document.querySelector('product-price'); 
pPrice.innerText = rollType;
const pImage = document.querySelector('product-image'); 
pImage.src = '../assets/products-' + rollType; 

