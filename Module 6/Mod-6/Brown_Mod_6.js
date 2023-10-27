const numbers = 30;
let firstNum = 1;
let secondNum = 2;
let num1 = 0;
let num2 = 1;
let nextNum;
let title

const img = document.querySelector("img");
img.src = 'chalkboard.jpg';

function displayFib() {
    const display = firstNum + " - 1";
    const display2 = secondNum + " - 1";
    document.writeln(display + "<br>");
    document.writeln(display2 + "<br>");

    for(counter = 3; counter <= numbers; counter++) {
        console.log(num1);
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
        document.writeln(counter + " - " + nextNum + "<br>");
    }
}
