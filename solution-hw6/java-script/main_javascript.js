let glaze = document.querySelector("#dropdown-1");
let optionsGlaze = ["Keep original", "Sugar milk", "Vanilla milk","Double chocolate"];
let optionsGlazeAdd = [0,0,0.5,1.5];

for(var i=0; i <  optionsGlaze.length; i++) {
    var type = optionsGlaze [i]; 
    var choice = document.createElement("option"); 
    choice.textContent = type; 
    choice.value = optionsGlazeAdd [i];
    //console.log (choice); 
    glaze.add(choice); 
}


let size = document.querySelector("#dropdown-2");
let optionsSize = ["1", "3", "6","12"];
let optionsSizeAdd = [1,3,5,10];

for(var i=0; i <  optionsSize.length; i++) {
    var type = optionsSize [i]; 
    var choice = document.createElement("option"); 
    choice.textContent = type; 
    choice.value = optionsSizeAdd[i]; 
    size.add(choice); 
}


let Product = {
    name: "Keep original",
    basePrice: 2.49,
    sizeOpt: "1",
    glazePrice: 0,
    packPrice: 1, 
}; 
 

function glazingChange(userInput) {
    Product.name = glaze.options[glaze.selectedIndex].text;
    //console.log(Product.name); 
    Product.glazePrice = parseFloat(userInput.value);
    total();
}
function sizeChange(userInput) {
    Product.sizeOpt = size.options[size.selectedIndex].text;
    Product.packPrice = parseFloat(userInput.value);
    total();
 }

let calcPrice = document.querySelector("#price");

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");
const dict = rolls[rollType];
//console.log (rollType); 

const pName = document.querySelector('#renamed-title'); 
pName.innerHTML = rollType + " Cinnamon Roll"; 
const pPrice = document.querySelector('#price'); 
pPrice.innerHTML = "$" + dict["basePrice"];
//console.log(dict["basePrice"]);
const pImage = document.querySelector('.product-image-productdetail'); 
pImage.src = '../assets/products/' + dict.imageFile; 

function total() {
    let finalPrice = (dict["basePrice"] + Product.glazePrice)*Product.packPrice; 
    //console.log(dict["basePrice"]);
    //console.log(Product.glazePrice);
    //console.log(Product.packPrice);
    calcPrice.innerHTML = "$" + String(finalPrice.toFixed(2));
    //console.log(Product.packPrice);

}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

const  cart = []; 

function addToCart() {
    let rollGlazing = Product.name;
    let packSize = Product.sizeOpt; 
    //console.log(packSize); 
    let basePrice = dict["basePrice"]; 
    const rollStore = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(rollStore); 
    console.log(cart); 
    saveToLocalStorage(); 
}

// function addToCart () {
//     if (localStorage.getItem("cart") != null){
//         const cString = localStorage.getItem("cart"); 
//         const cArray = JSON.parse(cString); 
//         for (const cData of cArray) {
//             const rollInst = new Roll (cData.type, cData.glazing, cData.size,cData.basePrice);
//             cart.push (rollInst);
//         }
//     }
//     var rollGlazing = selectglazing.options [selectglazing.selectedIndex].text;
//     var packSize = selectpacksize.options [selectpacksize.selectedIndex].text;
//     const rollInst = new Roll (rollType, rollGlazing, packSize, finalPrice); 
//     cart.push (rollInst); 

//     const cartArrayString = JSON.stringify(cart); 
//     localStorage.setItem("cart", cartArrayString); 
//     console.log(cart); 
// }

function saveToLocalStorage() {
    
    const cartArrayString = JSON.stringify(cart);
    console.log(cartArrayString);
  
    localStorage.setItem('storedNotes', cartArrayString);
}
  
function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedNotes');
    const cartArray = JSON.parse(cartArrayString);
    for (const item of cartArray) {
        cart.push(item);
    }
    console.log(cartArrayString);
}
  
if (localStorage.getItem('storedNotes') != null) {
    retrieveFromLocalStorage();
}