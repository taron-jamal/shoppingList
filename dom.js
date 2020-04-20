// Select and caching elements.
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


// Function declaration - user input.
function inputLength() {
  return input.value.length;
}

// Function declaration - list element.
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

// Function declaration - user input - mouse over/click.
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

// Function - user input - key stroke.
function addListAfterKeyPress() {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
