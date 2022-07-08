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
let numToString = num => Number(num);
const primaryDisp = document.getElementById('primaryDisp');
const secondaryDisp = document.getElementById('secondaryDisp');

function ac() {
    calc.num1 = undefined;
    calc.num2 = undefined;
    calc.operator = undefined;
    primaryDisp.innerText = '';
    secondaryDisp.innerText = '0';
    secondaryDispArray = [];
    num1Array = [];
    num2Array = [];
}

function c() {
    solution = undefined;
}

function equals() {
    if (!calc.num2) {
        calc.num2 = Number(num2Array.map((x) => x).join(''));
     } 
    //else if (solution) {
    //     calc.num1 = solution;
    //     primaryDisp.innerText = calc.operate(calc.operator,calc.num1,calc.num2);
    // } else {
    if ((Number(num2Array.map((x) => x).join(''))) !== calc.num2) {
        calc.num2 = Number(num2Array.map((x) => x).join(''));
    }
    solution = calc.operate(calc.operator,calc.num1,calc.num2);
    primaryDisp.innerText = solution;
    return solution;
    }

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
        console.log(`new calc1 is ${calc.num1}`);
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
            case 'c' : c();
                break;
            case ' % ' : break;
            case ' / ' : //calc.operator = divide;
                         operatorPress(button.id, divide);
                            // if (!calc.num1) {
                            //     console.log('first if');
                            //     calc.num1 = Number(num1Array.map((x) => x).join(''));
                            //     //console.log(calc.num1);
                            //     secondaryDispArray.push(button.id);
                            //     secondaryDisp.innerText = secondaryDispArray.join('');
                            // } else if (calc.num1 && !calc.num2) {
                            //     console.log('second if');
                            //     calc.num2 = Number(num2Array.map((x) => x).join(''));
                            //     //console.log(calc.num2);
                            //     secondaryDispArray.push(button.id);
                            //     secondaryDisp.innerText = secondaryDispArray.join('');
                            //     equals();
                            //     calc.num1 = solution;
                            //     num1Array = Array.from(String(calc.num1), numToString);
                            //     num2Array = [];
                            // } else if (calc.num1 && calc.num2) {
                            //     console.log('third if');
                            //     calc.num1 = equals();
                            //     console.log(`new calc1 is ${calc.num1}`);
                            //     num1Array = Array.from(String(calc.num1), numToString);
                            //     num2Array = [];
                            //     secondaryDispArray.push(button.id);
                            //     secondaryDisp.innerText = secondaryDispArray.join('');
                            // };
                break;
            case ' x ' : //calc.operator = multiply;
                         operatorPress(button.id, multiply);
                break;
            case ' - ' : //calc.operator = subtract;
                         operatorPress(button.id, subtract);
                break;
            case ' + ' : //calc.operator = add;
                         operatorPress(button.id, add);
                break;
            case ' = ' : equals();
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
                if (calc.num1) {
                    secondaryDispArray.push(button.id);
                    num2Array.push(button.id);
                    secondaryDisp.innerText = secondaryDispArray.join('');
                } else {
                    secondaryDispArray.push(button.id)
                    num1Array.push(button.id);
                    secondaryDisp.innerText = secondaryDispArray.join('');
            }
                    
                break;
            
        }
       
    });
});


//user enters numbers, stored as an array
//once an operator is selected, current array is converted to a num, is stored in num1 (copied to object as num1??)
//when another number is entered, start a new number storage
//if another operator is selected, run the calc with the two existing numbers and store the result as num1
    //the new number is stored as num2
//when equals is selected, run the most recent operator on num1 and num2, and return the result
