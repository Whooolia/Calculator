var lastInput;
var currentInput;

function init() {
    var buttons = document.querySelectorAll("#calc button")
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function (e) {
            var display = document.getElementById('display');
    
            lastInput = display.textContent.slice(-1);
            currentInput = e.currentTarget.value;
            // console.log(lastInput);
            // console.log(isNaN(parseInt(currentInput)));
            
            if(isNaN(parseInt(lastInput)) === false && isNaN(parseInt(currentInput)) === false) {
                display.textContent += e.currentTarget.value;
            } 

            else if(isNaN(parseInt(lastInput)) === false && isNaN(parseInt(currentInput)) === true) {
                display.textContent += e.currentTarget.value;
            }

            else if(isNaN(parseInt(lastInput)) === true && isNaN(parseInt(currentInput)) === false) {
                display.textContent += e.currentTarget.value;
            }

            console.log(display.textContent);
        });
    }
}


document.addEventListener("DOMContentLoaded", function () {
    init();

    document.getElementById("clear").addEventListener("click", function () {
        display.textContent = "";
    })

});
