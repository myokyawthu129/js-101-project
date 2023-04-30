let input = document.getElementById('input');

function appendToInput(val) {
  input.value += val;
}

function clearInput() {
  input.value = '';
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  let result = eval(input.value);
  input.value = result;
}
