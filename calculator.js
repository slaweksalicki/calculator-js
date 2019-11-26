window.onload = () => {
  display = '0';
  displayUpdate(display)
}

let display = document.getElementById('display').value;

let toBeAdded, toBeReduced, toBeMultiplied, toBeDivided;

function displayUpdate(display) {
  document.getElementById('display').value = display;
}

function btnACClick() {
  display = '0';
  displayUpdate(display);
}
function digitClick(digit) {
  display === '0' ? display = digit.toString() : display = display + digit.toString();
  displayUpdate(display);
}
function plusClick() {
  toBeAdded = parseFloat(display);
  display = '0';
}
function minusClick() {
  if (display === '0') {
    toBeReduced = '0';
  } else {
    toBeReduced = parseFloat(display);
  }
  display = '0';
}
function multiplyClick() {
  if (display === '0') {
    toBeMultiplied = '0';
  } else {
    toBeMultiplied = parseFloat(display);
  }
  display = '0';
}
function divideClick() {
  if (display === '0') {
    toBeDivided = '0';
  } else {
    toBeDivided = parseFloat(display);
  }
  display = '0';
}
function dotClick() {
  display = display + '.';
  displayUpdate(display);
}
function plusMinusClick() {
  display = Math.abs(display) * -1;
  displayUpdate(display);
}
function percentClick() {
  display = display / 100;
  displayUpdate(display);
}

function EqualClick() {
  if (toBeAdded) {
    display = parseFloat(toBeAdded) + parseFloat(display);
    toBeAdded = 0;
    displayUpdate(display);
  } else if (toBeReduced) {
    display = parseFloat(toBeReduced) - parseFloat(display);
    toBeReduced = 0;
    displayUpdate(display);
  } else if (toBeMultiplied) {
    display = parseFloat(toBeMultiplied) * parseFloat(display);
    toBeMultiplied = 0;
    displayUpdate(display);
  } else if (toBeDivided) {
    display = parseFloat(toBeDivided) / parseFloat(display);
    toBeDivided = 0;
    displayUpdate(display);
  } else {
    console.log('else')
  }
}
