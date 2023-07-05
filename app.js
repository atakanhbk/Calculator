let buttonList = [];
buttonList = document.querySelectorAll('.number');
let inputValue = document.querySelector("h2");
let resetButton = document.querySelector(".Reset");



AddButtonsEvent();
ResetButton();

function AddButtonsEvent() {
    buttonList.forEach(button => {
        button.addEventListener('click', function () {
            ClickedButton(button);
        });
    });
}

function ClickedButton(button) {
    let digitOfInputValue = inputValue.textContent.trim().length;
    if (digitOfInputValue <= 20) {

        inputValue.textContent += button.value;

    }
}

function ResetButton() {
    resetButton.addEventListener("click", function () {
        inputValue.textContent = inputValue.textContent.slice(0,-1);
    })
}