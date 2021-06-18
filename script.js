function clearscreen() {
    var clear = document.getElementById("display").reset();
    return clear;
  }

  function backspace() {
    var value = document.getElementById("displayResult").value;
    document.getElementById("displayResult").value = value.substr(
      0,
      value.length - 1
    );
    return value;
  }

  function calculator(result) {
    var display = document.getElementById("displayResult"),
      value;
    display.value = display.value + result;
  }