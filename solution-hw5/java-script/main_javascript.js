// let glaze = document.querySelector("#dropdown-1");
// let optionsGlaze = ["Keep original", "Sugar milk", "Vanilla milk","Double chocolate"];
// let optionsGlazeAdd = [0,0,0.5,1.5];

// for(var i=0; i <  optionsGlaze.length; i++) {
//     var type = optionsGlaze [i]; 
//     var choice = document.createElement("option"); 
//     choice.textContent = type; 
//     choice.value = optionsGlazeAdd [i];
//     //console.log (choice); 
//     glaze.add(choice); 
// }


// let size = document.querySelector("#dropdown-2");
// let optionsSize = ["1", "3", "6","12"];
// let optionsSizeAdd = [1,3,5,10];

// for(var i=0; i <  optionsSize.length; i++) {
//     var type = optionsSize [i]; 
//     var choice = document.createElement("option"); 
//     choice.textContent = type; 
//     choice.value = optionsSizeAdd[i]; 
//     size.add(choice); 
// }


// let Product = {
//     name: "Keep Original",
//     rollPrice: 2.49,
//     sizeOpt: "1",
//     glazePrice: 0,
//     packPrice: 1, 
// }; 
 

// function glazingChange(userInput) {
//     Product.name = glaze.options[glaze.selectedIndex].text;
//     //console.log(Product.name); 
//     Product.glazePrice = parseFloat(userInput.value);
//     total();
// }
// function sizeChange(userInput) {
//     Product.sizeOpt = size.options[size.selectedIndex].text;
//     Product.packPrice = parseFloat(userInput.value);
//     total();
//  }

// let calcPrice = document.querySelector("#price");

// const queryString = window.location.search;
// const params = new URLSearchParams(queryString);
// const rollType = params.get("roll");
// const dict = rolls[rollType];
// //console.log (rollType); 

// const pName = document.querySelector('#renamed-title'); 
// pName.innerHTML = rollType + " Cinnamon Roll"; 
// const pPrice = document.querySelector('#price'); 
// pPrice.innerHTML = "$" + dict["rollPrice"];
// //console.log(dict["rollPrice"]);
// const pImage = document.querySelector('.product-image-productdetail'); 
// pImage.src = '../assets/products/' + dict.imageFile; 

// function total() {
//     let finalPrice = (dict["rollPrice"] + Product.glazePrice)*Product.packPrice; 
//     //console.log(dict["rollPrice"]);
//     //console.log(Product.glazePrice);
//     //console.log(Product.packPrice);
//     calcPrice.innerHTML = "$" + String(finalPrice.toFixed(2));
//     //console.log(Product.packPrice);

// }

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

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
    console.log(cart);
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

    const list = document.querySelector('.overall'); 
    list.prepend(cinroll.element);

    updateCart(cinroll);
}


function updateCart(cinroll) {
    // get the HTML elements that need updating rollType, rollGlazing, packSize, rollPrice
    const cinImageElement = cinroll.element.querySelector('.product-image-cart');
    const cinTypeElement = cinroll.element.querySelector('.cart-name');
    const cinGlazeElement = cinroll.element.querySelector('.cart-glazing');
    const cinSizeElement = cinroll.element.querySelector('.cart-packsize'); 
    const cinPriceElement = cinroll.element.querySelector('.cart-price'); 
        
    // copy our notecard content over to the corresponding HTML elements
    cinImageElement.src = '../assets/products/'+ cinroll.type.toLowerCase() +"-cinnamon-roll.jpg";
    cinTypeElement .innerText = cinroll.type;
    cinGlazeElement.innerText = cinroll.glazing;
    cinSizeElement .innerText = cinroll.size;
    cinPriceElement.innerText = cinroll.basePrice;
}

function deleteNote(cinroll) {
    // remove the notecard DOM object from the UI
    cinroll.element.remove();
    // remove the actual Notecard object from our set of notecards
    cart.delete(cinroll);
}

const oriCard = cartAdd(
    "Original",
    "Sugar Milk", 
    1, 
    2.49
);

const walCard = cartAdd(
    "Walnut",
    "Vanilla Milk", 
    12, 
    39.90
);

const raiCard = cartAdd(
    "Raisin",
    "Sugar Milk", 
    3, 
    8.97
);

const appCard = cartAdd(
    "Apple",
    "Original", 
    3, 
    10.47
);

for (const cinroll of cart) {
    console.log(cinroll);
    createElement(cinroll);
}

function addToCart() {
    let rollGlazing = Product.name;
    let packSize = Product.sizeOpt; 
    //console.log(packSize); 
    let rollPrice = dict["rollPrice"]; 
    const rollStore = new Roll(rollType, rollGlazing, packSize, rollPrice);
    cart.push(rollStore); 
    console.log(cart); 
}




