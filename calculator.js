//basic math functions

const add = (x,y) => x + y;

const subtract = (x,y) => x - y;

const multiply = (x,y) => x * y;

const divide = (x,y) => x / y;

//create calculator object that includes function to return result

const calc = {
    num1: undefined,
    num2: undefined,
    operator: undefined,
    operate(operator, num1, num2) {
        return this.operator(this.num1, this.num2);
    },
};

// functions to populate the display

let num1Array = [];
let num2Array = [];
let secondaryDispArray = [];
let solution = undefined;
let rounded = undefined;
let numToString = num => Number(num);
const primaryDisp = document.getElementById('primaryDisp');
const secondaryDisp = document.getElementById('secondaryDisp');

function ac() {
    calc.num1 = undefined;
    calc.num2 = undefined;
    calc.operator = undefined;
    primaryDisp.innerText = '0';
    secondaryDisp.innerText = '0';
    secondaryDispArray = [];
    num1Array = [];
    num2Array = [];
}

function equals() {
    if (!calc.num2) {
        calc.num2 = Number(num2Array.map((x) => x).join(''));
    }
    if ((Number(num2Array.map((x) => x).join(''))) !== calc.num2) {
        calc.num2 = Number(num2Array.map((x) => x).join(''));
    }
    solution = calc.operate(calc.operator,calc.num1,calc.num2);
    if (solution == Infinity) {
        primaryDisp.innerText = 'NO DIVIDE BY ZERO';
    } else if (solution !== Infinity) {
    rounded = Math.round((solution + Number.EPSILON) * 100) / 100;
    primaryDisp.innerText = rounded;
    return solution;
    }
};

function operatorPress(buttonid, operator) {    
    if (!calc.num1) {
        console.log('first if');
        calc.operator = operator;
        calc.num1 = Number(num1Array.map((x) => x).join(''));
        console.log(calc);
        secondaryDispArray.push(buttonid);
        secondaryDisp.innerText = secondaryDispArray.join('');
    } else if (calc.num1 && !calc.num2) {
        console.log('second if');
        calc.num2 = Number(num2Array.map((x) => x).join(''));
        console.log(calc);
        secondaryDispArray.push(buttonid);
        secondaryDisp.innerText = secondaryDispArray.join('');
        equals();
        calc.operator = operator;
        calc.num1 = solution;
        num1Array = Array.from(String(calc.num1), numToString);
        num2Array = [];
        console.log(calc);
    } else if (calc.num1 && calc.num2) {
        console.log('third if');
        calc.num1 = equals();
        calc.operator = operator;
        console.log(calc);
        num1Array = Array.from(String(calc.num1), numToString);
        num2Array = [];
        secondaryDispArray.push(buttonid);
        secondaryDisp.innerText = secondaryDispArray.join('');
    };
}


//button activation

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'ac' : ac();
                break;
            case 'c' : ac();
                break;
            case ' / ' : operatorPress(button.id, divide);
                break;
            case ' x ' : operatorPress(button.id, multiply);
                break;
            case ' - ' : operatorPress(button.id, subtract);
                break;
            case ' + ' : operatorPress(button.id, add);
                break;
            case ' = ' :  
                    
                    if (num1Array.length == 0 || num2Array.length == 0) {
                        console.log('ERROR');
                        primaryDisp.innerText = 'ERROR';              
                        } 
                    equals();
                    console.log(calc.num1);
                    console.log(calc.operator);
                    console.log(calc.num2);
                    console.log(solution);
                break;
            case '.' :                
            case '1' :
            case '2' : 
            case '3' :
            case '4' :
            case '5' :
            case '6' :
            case '7' :
            case '8' :
            case '9' :
            case '0' : 

                if (!calc.num1) {
                    if (num1Array.filter(x => x == '.').length == 1 && button.id === '.') {
                        break;
                    }
                    secondaryDispArray.push(button.id)
                    num1Array.push(button.id);
                    secondaryDisp.innerText = secondaryDispArray.join('');
                } else {
                    if (num2Array.filter(x => x == '.').length == 1 && button.id === '.') {
                        break;
                    }
                    secondaryDispArray.push(button.id);
                    num2Array.push(button.id);
                    secondaryDisp.innerText = secondaryDispArray.join('');
                }       
                break;            
        }       
    });
});

//keyboard activation

const keydown = document.addEventListener('keydown', (e) => {
    console.log(e);
    switch (e.key) {
        case 'Delete' : ac();
            break;
        case 'c' : ac();
            break;
        case '/' : operatorPress(e.key, divide);
            break;
        case 'x' : operatorPress(e.key, multiply);
            break;
        case '*' : operatorPress(e.key, multiply);
            break;
        case '-' : operatorPress(e.key, subtract);
            break;
        case '+' : operatorPress(e.key, add);
            break;
        case '=' :  
                if (num1Array.length == 0 || num2Array.length == 0) {
                    console.log('ERROR');
                    primaryDisp.innerText = 'ERROR';              
                    } 
                equals();
                console.log(calc.num1);
                console.log(calc.operator);
                console.log(calc.num2);
                console.log(solution);
        case 'Enter' : 
                if (num1Array.length == 0 || num2Array.length == 0) {
                    console.log('ERROR');
                    primaryDisp.innerText = 'ERROR';              
                    } 
                equals();
                console.log(calc.num1);
                console.log(calc.operator);
                console.log(calc.num2);
                console.log(solution);5+5
            break;
        case '.' :                
        case '1' :
        case '2' : 
        case '3' :
        case '4' :
        case '5' :
        case '6' :
        case '7' :
        case '8' :
        case '9' :
        case '0' : 

            if (!calc.num1) {
                if (num1Array.filter(x => x == '.').length == 1 && e.key === '.') {
                    break;
                }
                secondaryDispArray.push(e.key)
                num1Array.push(e.key);
                secondaryDisp.innerText = secondaryDispArray.join('');
            } else {
                if (num2Array.filter(x => x == '.').length == 1 && e.key === '.') {
                    break;
                }
                secondaryDispArray.push(e.key);
                num2Array.push(e.key);
                secondaryDisp.innerText = secondaryDispArray.join('');
            }
            break;
        }
});


//user enters numbers, stored as an array
//once an operator is selected, current array is converted to a num, is stored in num1 (copied to object as num1??)
//when another number is entered, start a new number storage
//if another operator is selected, run the calc with the two existing numbers and store the result as num1
    //the new number is stored as num2
//when equals is selected, run the most recent operator on num1 and num2, and return the result
