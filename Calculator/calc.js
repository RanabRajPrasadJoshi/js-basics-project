


document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '/', '*', '-', '+'];

    if (validKeys.includes(key)) {
        if (key === '/') {
            clicked('/');
        } else if (key === '*') {
            clicked('*');
        } else if (key === '-') {
            clicked('-');
        } else if (key === '+') {
            clicked('+');
        } else {
            clicked(key);
        }
    } else if (key === 'Enter') {
        calculate();
    }
});
let output = document.getElementById("out");

function clicked(input){
    if (input === 'AC') {
        output.textContent = '';
    } else {
        output.textContent += input;
    }
}

function calculate(){
    try {
        output.textContent = eval(output.textContent);
        
    } catch (error) {
        output.textContent = "ERROR";
        
    }
}