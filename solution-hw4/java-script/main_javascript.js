let glaze = document.querySelector("#dropdown-1");
let optionsGlaze = ["Keep original", "Sugar milk", "Vanilla milk","Double chocolate"];
let optionsGlazeAdd = [0,0,0.5,1.5];

for(var i=0; i <  optionsGlaze.length; i++) {
    var type = optionsGlaze [i]; 
    var choice = document.createElement("option"); 
    choice.textContent = type; 
    choice.value = optionsGlazeAdd [i];
    console.log (choice); 
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
    name: "Original Cinnamon Roll",
    basePrice: 2.49, 
    glazePrice: 0,
    packPrice: 1, 
}

function glazingChange(userInput) {
    Product.glazePrice = parseFloat(userInput.value);
    total();
}
function sizeChange(userInput) {
    Product.packPrice = parseFloat(userInput.value);
    total();
 }

let calcPrice = document.querySelector("#price");

function total() {
    let finalPrice = (Product.basePrice + Product.glazePrice)*Product.packPrice; 
    calcPrice.innerHTML = "$" + String(finalPrice.toFixed(2));
}
