
function getSize(){
    const sizeOptions = document.getElementsByName("size");
    let sizePicked;

    for(let i = 0; i < sizeOptions.length; i++){
        if(sizeOptions[i].checked){
        sizePicked = sizeOptions[i].value;
        break;    
        }
    }
    return sizePicked;
}

function getCrust(){
    const crustOptions = document.getElementsByName("crust");
    let crustPicked;

    for(let i = 0; i < crustOptions.length; i++){
        if(crustOptions[i].checked){
        crustPicked = crustOptions[i].value;
        break; 
        }
    }
    return crustPicked;
}

function getSauce(){
    const sauceOptions = document.getElementsByName("sauce");
    let saucePicked;

    for(let i = 0; i < sauceOptions.length; i++){
        if(sauceOptions[i].checked){
            saucePicked = sauceOptions[i].value;
            break;
        }
    }
    return saucePicked;
}


function getMeat(){
    const meatOptions = document.getElementsByName("meat");
    let meatPicked = [];

    for(let i = 0; i < meatOptions.length; i++){
        if(meatOptions[i].checked){
            meatPicked.push(meatOptions[i].value);
        }
    }

    if(meatPicked.length === 0){
        return "none"
    }else{
        return meatPicked;
    }

}

function getNonMeat(){
    const nonMeatOptions = document.getElementsByName("nonMeat");
    let nonMeatPicked = [];

    for(let i = 0; i < nonMeatOptions.length; i++){
        if(nonMeatOptions[i].checked){
            nonMeatPicked.push(nonMeatOptions[i].value);
        }
    }
    if(nonMeatPicked.length === 0){
        return "none"
    }else{
        return nonMeatPicked;
    }
}

function calculateTotal(){
    let sizeTotal;
    let crustTotal;
    let sauceTotal;
    let meatTotal = 0.00;
    let nonMeatTotal = 0.00;

    const size = getSize();
    const crust = getCrust();
    const sauce = getSauce();
    const meats = getMeat();
    const nonMeats = getNonMeat();

    if(size === "Large"){
        sizeTotal = 15.00;
    }else if(size === "Medium"){
        sizeTotal = 13.00;
    }else if(size === "Small"){
        sizeTotal = 11.00;
    }else if(size === "Personal"){
        sizeTotal = 9.00;
    }else{
        sizeTotal = 0.00;
    }
    
    if(crust === "Stuffed Crust"){
        crustTotal = 3.00;
    }else{
        crustTotal = 0.00;
    }

    if(sauce === "No Sauce"){
        sauceTotal = -0.50;
    }else{
        sauceTotal = 0.50;
    }

    for(let i = 0; i < meats.length; i++){
        if(meats[i] === "Ham"){
            meatTotal = meatTotal + 0.50;
        }else if(meats[i] === "Beef"){
            meatTotal = meatTotal + 0.50;
        }else if(meats[i] === "Pepperoni"){
            meatTotal = meatTotal + 0.50;
        }else if(meats[i] === "Chicken"){
            meatTotal = meatTotal + 0.50;
        }else if(meats[i] === "Bacon"){
            meatTotal = meatTotal + 0.50;
        }else if(meats[i] === "Steak"){
            meatTotal = meatTotal + 0.75;
        }
    }

    for(let i = 0; i < nonMeats.length; i++){
        if(nonMeats[i] === "Onions"){
            nonMeatTotal = nonMeatTotal + 0.50;
        }else if(nonMeats[i] === "Banana Peppers"){
            nonMeatTotal = nonMeatTotal + 0.50;
        }else if(nonMeats[i] === "Black Olives"){
            nonMeatTotal = nonMeatTotal + 0.50;
        }else if(nonMeats[i] === "Mushrooms"){
            nonMeatTotal = nonMeatTotal + 0.50;
        }else if(nonMeats[i] === "Pineapple"){
            nonMeatTotal = nonMeatTotal + 0.50;
        }else if(nonMeats[i] === "Green Peppers"){
            nonMeatTotal = nonMeatTotal + 0.50;
        }else if(nonMeats[i] === "Feta Cheese"){
            nonMeatTotal = nonMeatTotal + 0.50;
        }
    }

    const total = sizeTotal + crustTotal + sauceTotal + meatTotal + nonMeatTotal;
    const salesTax = total * 0.07;
    const orderTotal = total + salesTax;
    return orderTotal.toFixed(2);

}


function orderPizza(){
    const size = getSize();
    const crust = getCrust();
    const sauce = getSauce();
    const meats = getMeat();
    const nonMeats = getNonMeat();

    const total = calculateTotal();

    const completeOrder = document.getElementById("orderComplete");

    completeOrder.innerHTML = `
  <strong>Your Order:</strong><br>
  Pizza Size: ${size}<br>
  Crust: ${crust}<br>
  Sauce: ${sauce}<br>
  Meat Toppings: ${meats}<br>
  Non-Meat Toppings: ${nonMeats}<br>
  ------------------------
  <br>
  Sales Tax: 7%<br>
  <strong>Total: $${total}</strong>`;
}

document.getElementById("pizzaForm").addEventListener("submit", function(event){
        event.preventDefault();
        orderPizza();   
    }
);

document.getElementById("clearOrder").addEventListener("click", function() {
  document.getElementById("orderComplete").textContent = "";
  document.getElementById("pizzaForm").reset();
});