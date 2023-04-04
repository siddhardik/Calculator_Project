// console.log("Javascript Added Successfully ");

// var out=document.getElementById("screen");
// out.innerText="2377777777455555577555";

var display = document.getElementById("screen");
var buttons = document.getElementsByTagName("button");

var operand1 = 0;
var operand2 = null;
var operator = null;

var isEmpty = false;

for (var i = 0 ; i < buttons.length; i++) {
    buttons[i].addEventListener('click', click);
}

function click() {
    var val = this.getAttribute("btn-value");

    if(val == 'AC') {

        display.innerHTML = "";

    }else if(val == '←') {
        
        let remove = display.innerHTML;
        let afterRemove = remove.slice(0, -1);

        display.innerHTML = afterRemove;

    } else if(val == '+') {
        
        operator = val;
        operand1 = parseFloat(display.textContent);
        isEmpty = true;

    } else if(val == '-') {
        
        operator = val;
        operand1 = parseFloat(display.textContent);
        isEmpty = true;

    }else if(val == '/') {
        
        operator = val;
        operand1 = parseFloat(display.textContent);
        isEmpty = true;

    }else if(val == '*') {
        
        operator = val;
        operand1 = parseFloat(display.textContent);
        isEmpty = true;

    }else if(val == '%') {
        
        operand1 = parseFloat(display.textContent);
        operand1 = operand1 / 100;
        display.textContent = operand1

    }else if(val == '.') {
        
        if (display.textContent.length && !display.textContent.includes('.')) {
            display.textContent = display.textContent + '.';
        }

    } else if(val == '=') {

        operand2 = parseFloat(display.textContent);

        let ans = eval(operand1 + "" + operator + "" + operand2);
        display.innerHTML = ans;

    }else {
        if(isEmpty) {
            display.innerHTML = "";
            display.innerText += val;
            isEmpty = false;
        }else {
            display.innerText += val;
        }  
    }
    
    
}