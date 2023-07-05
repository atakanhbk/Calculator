
let buttonList = document.querySelectorAll('.number');
let inputValue = document.querySelector("h2");
let resetButton = document.querySelector(".Reset");
let transactionButtonList = document.querySelectorAll(".transactions");

console.log(transactionButtonList);

var calculateType;
var isCalculateTypeOn;
var firstCalculateNumber;
var secondCalculateNumber;
var calculated = false;
AddButtonsEvent();
ResetButton();

function AddButtonsEvent() {
    buttonList.forEach(button => {
        button.addEventListener('click', function () {
            ClickedNumberButton(button);
        });
    });

    transactionButtonList.forEach(transactionButton => {
        transactionButton.addEventListener('click', function () {
            isCalculateTypeOn = true;
            switch (transactionButton.value) {
                case "/":
                    calculateType = "Divide";
                    break;
                case "*":
                    calculateType = "Multiply";
                    break;
                case "+":
                    calculateType = "Calculate";
                    break;
                case "-":
                    calculateType = "Mines";
                    break;
                case "=":
                 
                    if (calculateType == "Calculate") {
                        inputValue.textContent = "" + (parseInt(firstCalculateNumber) + parseInt(secondCalculateNumber));
                                    
                    }
                    else if (calculateType == "Mines") {
                        inputValue.textContent = "" + (parseInt(firstCalculateNumber) - parseInt(secondCalculateNumber));
                    }

                    else if (calculateType == "Multiply") {
                        inputValue.textContent = "" + (parseInt(firstCalculateNumber) * parseInt(secondCalculateNumber));
                    }

                    else if (calculateType == "Divide") {
                        inputValue.textContent = "" + (parseInt(firstCalculateNumber) / parseInt(secondCalculateNumber));
                    }
                
                    calculateType = null;   
                   
                    break;

            }
        })
    })

}

function ClickedNumberButton(button) {

    if (isCalculateTypeOn) {
    
        firstCalculateNumber = inputValue.textContent.trim();
        inputValue.textContent = "";
        isCalculateTypeOn = false;
    }

    let digitOfInputValue = inputValue.textContent.trim().length;
    if (digitOfInputValue <= 20) {
        inputValue.textContent += button.value;
        secondCalculateNumber = inputValue.textContent.trim()
    }

    console.log("first = " + firstCalculateNumber);
    console.log("second = " + secondCalculateNumber);




}

function ResetButton() {
    resetButton.addEventListener("click", function () {
        inputValue.textContent = inputValue.textContent.slice(0, -1);
    })
}

