// Get the id
function getTheId(id) {
  const input = document.getElementById(id);
  return input;
}

// To get any text value
function toGetText(id) {
  const input = document.getElementById(id).innerText;
  return input;
}

// To convert from string to Number
function convertToNum(id) {
  const convertedInput = parseInt(id);
  return convertedInput;
}

// To change any text
function changeText(id, value) {
  document.getElementById(id).innerText = value;
}