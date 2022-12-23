const buttons = document.querySelectorAll('button');

const screenDisplay = document.querySelector(".screen");


let toCalculate = [];
let valString = ""
const calculate = (button) => {
    if(toCalculate.length === 0 ){
        if(button.textContent === '+'||button.textContent === '-'||button.textContent === '/'||button.textContent === 'x'){
            const signed = document.getElementsByClassName("sign");
            signed.style.cursor = disabled;
        }
        
    }
    if(button.textContent === "="){
        let ansString = eval(valString)
        screenDisplay.textContent = ansString;
        
    }
    else if(button.textContent ==="CLEAR"){
        toCalculate=[]
        screenDisplay.textContent="";
    }
    else{
        const value = button.textContent;
        toCalculate.push(value)
        valString = toCalculate.join('')
        console.log(valString)
        screenDisplay.textContent = valString;
    }
    
}

buttons.forEach(button => button.addEventListener("click",()=> calculate(button)));

console.log(eval("04+62"))

const arr = [10,20];

let finalStr = "+67";

finalStr = arr.join('');

console.log(finalStr);

