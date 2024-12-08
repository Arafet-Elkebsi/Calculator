const display = document.querySelector(".display input");
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="error";
    }
}
//color part
const calculatorB = document.getElementById("calculatorId");
const arrayi = document.getElementsByName('colorButton');

for(let i = 0; i < arrayi.length; i++) {
    arrayi[i].onclick = function() {
        calculatorB.style.background = arrayi[i].value;
    };
}
/*
arrayi.forEach(button => {
    button.addEventListener("click", function() { 
        const selectedColor = button.getAttribute("backgroundColor");
        if (selectedColor) {
            calculatorB.style.backgroundColor = selectedColor;  
        } else {
            calculatorB.style.backgroundColor = "linear-gradient(to bottom right, #5f5f5f, #000000, #494949)";        }
    });
});
*/