//basic math functions

const add = (x,y) => x + y;

const subtract = (x,y) => x - y;

const multiply = (x,y) => x * y;

const divide = (x,y) => x / y;

//operator function that takes in operation to perform plus two numbers

//const operate = (operator, x, y) => operator(x,y);

//create calculator object

const calc = {
    num1: undefined,
    num2: undefined,
    operator: undefined,
    operate(operator, num1, num2) {
        return this.operator(this.num1, this.num2);
    },
};

// functions to populate the display

const primaryDisp = document.getElementById('primaryDisp');
const secondaryDisp = document.getElementById('secondaryDisp');

//button event listeners

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
       let selection = undefined;
       let solution = undefined;
        switch (button.id) {
            case 'ac' : break;
            case 'c' : break;
            case 'percent' : break;
            case 'divide' : calc.operator = divide;
                break;
            case 'multiply' : calc.operator = multiply;
                break;
            case 'subtract' : calc.operator = subtract;
                break;
            case 'add' : calc.operator = add;
                break;
            case 'decimal' : break;
            case 'equals' : solution = calc.operate(calc.operator,calc.num1,calc.num2);
                            console.log(solution);
                break;
            case '1' :
            case '2' : 
            case '3' :
            case '4' :
            case '5' :
            case '6' :
            case '7' :
            case '8' :
            case '9' :
            case '0' : selection = Number(button.id);
                       primaryDisp.innerText = selection;
                       if (!calc.num1) {
                        calc.num1 = selection;
                        console.log(`num1: ${calc.num1}`);
                       } else {
                        calc.num2 = selection;
                        console.log(`num2: ${calc.num2}`);
                       }
                break;
            
        }
        //return selection;
    });
});

