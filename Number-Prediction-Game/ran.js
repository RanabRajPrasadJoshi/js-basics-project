let randomNum = Math.trunc((Math.random() * 99) + 1);
let count = 0;
count = Number(count)

let output = document.getElementById("displayout");
let displayCount = document.getElementById("count")

// Convert input to a number
function submit() {
    let input = document.getElementById("input").value;
    input = Number(input);


    // Check if input is within the valid range
    if (input < 0 || input > 100) {
        output.textContent = "Enter a valid number between 0 and 100";
    } else {
        if (input === randomNum) {
            count ++;
            output.textContent = "Congratulations! You guessed the number i.e: " + randomNum + " where no of attemp was " + count  ;
        } else if (input < randomNum) {
            count ++;
            output.textContent = "The number you entered is less than the generated number i.e " + input +" < Random number generated";
        } else {
            output.textContent = "The number you entered is greater than the generated numberi.e " + input +" > Random number generated";
            count ++;
        }
        displayCount.textContent = "no of attemped: " + count;
        
    }
}
