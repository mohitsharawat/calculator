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


  // dark mode

  function dark_light() {
    var element = document.getElementById('dark-check');
    var dark = document.getElementById('container');

    if(element.checked){
        dark.classList.remove("light");
        dark.classList.add("dark");
    } else if(element.checked != true){
        dark.classList.remove("dark");
        dark.classList.add("light");
    }
    else{
        alert("function not working");
    }
}
