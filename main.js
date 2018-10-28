var lastInput;
var currentInput;

function init() {
    var buttons = document.querySelectorAll('#calc button');
    var display = document.getElementById('display');
    var clear = document.getElementById("clear");
    var numbers = ['1','2','3','4','5','6','7','8','9','0'];
    var operators = ['+','-','x','/'];
    var decimalPointExist = false;
    var num1 = null;
    var num2 = 0;
    var operator = '';
    
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function (e) {
            
            // Remove the default 0 as soon as it starts 
            if(display.textContent === '0'){
                display.textContent = '';
            }

            // Clear when 'C' clicks
            clear.addEventListener("click", function () {
                display.textContent = "";
                decimalPointExist = false;
                num1 = null;
            });

            lastInput = display.textContent.slice(-1);
            currentInput = e.currentTarget.value;

            // Calculate **Problem : it doesn't give a correct result when x or / comes
            if(operators.includes(currentInput) || currentInput === '=') {
                if(num1 === null){
                    num1 = parseFloat(display.textContent);
                    // console.log(num1);
                    operator = currentInput;
                } else { //regex - except for numbers and decimal
                    num2 = parseFloat(display.textContent.split(/[^0-9\.]+/).slice(-1));
                    // console.log(num2);
                    if(operator === '+'){
                        num1 = num1 + num2;
                    } else if(operator === '-'){
                        num1 = num1 - num2;
                    } else if(operator === 'x'){
                        num1 = num1 * num2;
                    } else if(operator === '/'){
                        num1 = num1 / num2;
                    }
                    operator = currentInput;
                }
            }

            // To not display operators in a row
            if(currentInput === '=' && display.textContent !== ''){
                display.textContent = num1;
                num1 = null;
            } else { // OR - both of them are false => false, otherwise its true
                if(isNaN(parseInt(lastInput)) === false || isNaN(parseInt(currentInput)) === false) {
                    display.textContent += e.currentTarget.value;
                }
            }
            console.log(display.textContent);

            // **Problem - multiple '.' is not allowed
            if(e.currentTarget.value === '.'){
                if(!decimalPointExist){
                    decimalPointExist = true;
                } else {
                        if(isNaN(parseInt(lastInput)) === false && e.currentTarget.value === '.'){
                            e.currentTarget.value = '';
                            decimalPointExist = true;  
                        }
                    }   
                }
            })
        }
    }

document.addEventListener("DOMContentLoaded", function () {
    init();
})
