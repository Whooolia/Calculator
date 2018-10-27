var lastInput;
var currentInput;

function init() {
    var buttons = document.querySelectorAll("#calc button");
    var decimalPointExist = false;
    // Pring number + operators not allowed prining in a row
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function (e) {
            var display = document.getElementById('display');
            console.log(display.innerHTML);
            
            lastInput = display.textContent.slice(-1);
            currentInput = e.currentTarget.value;

            // Remove the default 0 as soon as it starts 
            if(display.textContent === '0'){
                display.textContent = ' ';
            }
   
            // To not display operators in a row
            if(isNaN(parseInt(lastInput)) === false || isNaN(parseInt(currentInput)) === false) {
                display.textContent += e.currentTarget.value;
            }
            console.log(display.textContent);

            // Problem - multiple '.' is not allowed
                if(!decimalPointExist){
                    display.textContent += e.currentTarget.value;
                    decimalPointExist = true;
                } else {
                        if(isNaN(parseInt(lastInput)) === false && e.currentTarget.value === '.'){
                            display.textContent += e.currentTarget.value = '';
                            decimalPointExist = true;  
                }

            // Calc the number
            // eval(display.textContent);
            console.log(eval('2'+'2'));
            
            }
        });
    }
}

       


document.addEventListener("DOMContentLoaded", function () {
    init();
    document.getElementById("clear").addEventListener("click", function () {
        display.textContent = "";
    })


});
