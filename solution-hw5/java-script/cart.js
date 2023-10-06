class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
};

let glazingdict = {
    'Keep original':0.0,
    'Sugar milk':0.0,
    'Vanilla milk':0.5,
    'Double cohcolate':1.5
};

let packSizeDict = {
    '1':1,
    '3':3,
    '6':5,
    '12':10
};

//asked to create 4 new instances of the class
// let orig = new Roll ("Original", "Sugar Milk", 1, 2.49); 
// let wal = new Roll ("Walnut","Vanilla Milk", 12, 39.90); 
// let rai = new Roll ("Raisin", "Sugar Milk", 3, 8.97); 
// let app = new Roll ("Apple", "Original", 3, 10.47); 

const  cart = new Set(); 

//function that takes Roll instance as argument 
function cartAdd(rollType, rollGlazing, packSize, rollPrice) {
    const cinroll = new Roll(rollType, rollGlazing, packSize, rollPrice);
    cart.add(cinroll); 
    //console.log(cart);
    return cinroll;
}

function createElement(cinroll) {
    //query Selector is referring to the html id/class
    const template = document.querySelector('#finalCart');
    const clone = template.content.cloneNode(true);

    cinroll.element = clone.querySelector('.product-cart');

    const btnDelete = cinroll.element.querySelector('#remove-1');
    console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
      deleteNote(cinroll);
    });

    const list = document.querySelector('#item-list'); 
    list.appendChild(cinroll.element);

    updateCart(cinroll);
}


function updateCart(cinroll) {
    // get the HTML elements that need updating rollType, rollGlazing, packSize, rollPrice
    const cinImageElement = cinroll.element.querySelector('.product-image-cart');
    const cinTypeElement = cinroll.element.querySelector('.cart-name');
    const cinGlazeElement = cinroll.element.querySelector('.cart-glazing');
    const cinSizeElement = cinroll.element.querySelector('.cart-packsize'); 
    const cinPriceElement = cinroll.element.querySelector('.product-price'); 
        
    // copy our notecard content over to the corresponding HTML elements
    cinImageElement.src = '../assets/products/'+ rolls[cinroll.type].imageFile;
    // console.log(rolls[cinroll.type].imageFile)
    cinTypeElement .innerText = cinroll.type + " Cinnamon Roll";
    cinGlazeElement.innerText = "Glazing: " + cinroll.glazing;
    cinSizeElement .innerText = "Pack Size: " + cinroll.size;
    cinPriceElement.innerText = "$ " + total(cinroll);
    updateTotalPrice(cinroll);
}

function deleteNote(cinroll) {
    // remove the notecard DOM object from the UI
    cinroll.element.remove();
    // remove the actual Notecard object from our set of notecards
    cart.delete(cinroll);
    updateTotalPrice();
}

function total(cinroll) {
    let finalPrice = (cinroll.basePrice + glazingdict[cinroll.glazing]) * packSizeDict[cinroll.size]; 
    return finalPrice.toFixed(2);
}

const oriCard = cartAdd(
    "Original",
    "Sugar milk", 
    '1', 
    2.49
);

const walCard = cartAdd(
    "Walnut",
    "Vanilla milk", 
    '12', 
    3.49
);

const raiCard = cartAdd(
    "Raisin",
    "Sugar milk", 
    '3', 
    2.99
);

const appCard = cartAdd(
    "Apple",
    "Keep original", 
    '3', 
    3.49
);

for (const cinroll of cart) {
    //console.log(cinroll);
    createElement(cinroll);
}
updateTotalPrice();
console.log(cart)

// function addToCart() {
//     let rollGlazing = Product.name;
//     let packSize = Product.sizeOpt; 
//     //console.log(packSize); 
//     let rollPrice = dict["rollPrice"]; 
//     const rollStore = new Roll(rollType, rollGlazing, packSize, rollPrice);
//     cart.push(rollStore); 
//     //console.log(cart); 
// }

function updateTotalPrice() {
    const totalPrice = document.querySelector('#total-cart-price');
    let tempPrice = 0.00;
    for (let i of cart){
        // console.log(total(i))
        tempPrice = tempPrice + parseFloat(total(i));
    }
    console.log(tempPrice);
    totalPrice.innerText = '$ ' + tempPrice.toFixed(2);
}



