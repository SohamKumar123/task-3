document.addEventListener("DOMContentLoaded", function() {
    let display = document.getElementById("display");
    let buttons = Array.from(document.querySelectorAll("button"));

    buttons.map(button => {
        button.addEventListener("click", function() {
            if (button.id === "clear") {
                display.textContent = "0";
            } else if (button.id === "backspace") {
                let currentValue = display.textContent;
                display.textContent = currentValue.slice(0, -1);
            } else if (button.id === "calculate") {
                try {
                    display.textContent = eval(display.textContent);
                } catch {
                    display.textContent = "Error";
                }
            } else {
                if (display.textContent === "0" || display.textContent === "Error") {
                    display.textContent = button.id;
                } else {
                    display.textContent += button.id;
                }
            }
        });
    });
});
