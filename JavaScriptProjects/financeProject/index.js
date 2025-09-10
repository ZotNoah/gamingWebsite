
const price = document.getElementById('principal');
const downPayment = document.getElementById('downPayment');
const loanTerm = document.getElementById('loanTerm');
const interestRate= document.getElementById('interestRate');


function convertToNumber(userInput){
    const num = Number(userInput.value);
    
    if(isNaN(num)){
        alert(`Please enter a number for ${userInput.name}`);
    }else{
        return num;
    }
}

function validateDownPayment() {
    const priceValue = convertToNumber(price);
    const downPaymentValue = convertToNumber(downPayment);

    if (priceValue === null || downPaymentValue === null) return;

    if (downPaymentValue > priceValue) {
        alert("Down payment cannot be greater than the principal.");
    }
}

function financeFormula(){
    validateDownPayment();
    const p = convertToNumber(price) - convertToNumber(downPayment);
    const r  = convertToNumber(interestRate) / 12 / 100;
    const n = convertToNumber(loanTerm);

    const m = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n ) - 1);
    
    return m.toFixed(2);

}



function financeCalculator(){
   const result = financeFormula();
   const statement = document.getElementById('statement');

   if(!isNaN(result)){
        if(result < 0){
            statement.innerHTML = "Please enter valid numbers.";
        }else{
            statement.innerHTML = `your monthly payment is ${result}`;
        }
   }else{
    statement.innerHTML = "Please enter valid numbers.";
   }
}
