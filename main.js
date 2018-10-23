var lastInput;
var currentInput;

function init() {
    var buttons = document.querySelectorAll("#calc button");
    var decimalPointExist = false;
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function (e) {
            var display = document.getElementById('display');
            
            lastInput = display.textContent.slice(-1);
            currentInput = e.currentTarget.value;
          
            
            // To not display operators in a row
            if(isNaN(parseInt(lastInput)) === false || isNaN(parseInt(currentInput)) === false) {
                display.textContent += e.currentTarget.value;
            }
            console.log(display.textContent);

            // because there are no decimals YET!
            if(e.currentTarget.value === '.'){
                if(decimalPointExist){
                    display.textConetent += e.currentTarget.value;
                    decimalPointExist = true;
                } else if(!decimalPointExist){
                    for(var i = 0; i < display.textContent.length; i++){
                        if(display.textContent[i] === '+' || display.textContent[i] === '-' ||display.textContent[i] === 'X' || display.textContent[i] === '/'){
                            
                        } else {
                            display.textConetent += e.currentTarget.value;
                        }
                    }
                       
                    }
                    
                }
            })
        };
            
            

        
        }
   

    // No repeat decimal
   
       


document.addEventListener("DOMContentLoaded", function () {
    init();
    document.getElementById("clear").addEventListener("click", function () {
        display.textContent = "";
    })


});
