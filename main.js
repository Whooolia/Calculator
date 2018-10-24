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

            var operators = ['+','-','x','/'];
            var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
            if(e.currentTarget.value === '.'){
                if(!decimalPointExist){
                    display.textConetent += e.currentTarget.value;
                    decimalPointExist = true;
                } else {
                        if(isNaN(parseInt(lastInput)) === true && e.currentTarget.value === (isNaN(parseInt(lastInput)) === false)){
                            display.textConetent += e.currentTarget.value;
                        } else if(isNaN(parseInt(lastInput)) === false && e.currentTarget.value === (isNaN(parseInt(lastInput)) === false)){
                            display.textConetent += e.currentTarget.value;
                        } else{
                            console.log('should not pring the dot');
                        }
                }
            }; 
        })
    }
}
       


document.addEventListener("DOMContentLoaded", function () {
    init();
    document.getElementById("clear").addEventListener("click", function () {
        display.textContent = "";
    })


});
