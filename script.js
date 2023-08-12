const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id === "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (item.id === "equal") {
      try {
        let expression = display.innerText;
        let balanced = areParenthesesBalanced(expression);
        
        if (!balanced) {
          display.innerText = "Invalid Parentheses!";
          setTimeout(() => (display.innerText = ""), 2000);
        } else if (expression !== "") {
          display.innerText = eval(expression);
        } else {
          display.innerText = "Empty!";
          setTimeout(() => (display.innerText = ""), 2000);
        }
      } catch (error) {
        display.innerText = "Error!";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else {
      display.innerText += item.id;
    }
  };
});

// Helper function to check if parentheses are balanced
function areParenthesesBalanced(expression) {
  const stack = [];
  for (const char of expression) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
