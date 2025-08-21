function convertTemp() {
  var temp = parseFloat(document.getElementById("temp").value);
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var result = document.getElementById("result");

  if (isNaN(temp)) {
    result.innerHTML = "⚠ Please enter a valid number!";
    return;
  }

  var converted;

  // Conversion logic
  if (from === "Celsius") {
    if (to === "Celsius") converted = temp;
    else if (to === "Fahrenheit") converted = (temp * 9) / 5 + 32;
    else if (to === "Kelvin") converted = temp + 273.15;
  } else if (from === "Fahrenheit") {
    if (to === "Celsius") converted = ((temp - 32) * 5) / 9;
    else if (to === "Fahrenheit") converted = temp;
    else if (to === "Kelvin") converted = ((temp - 32) * 5) / 9 + 273.15;
  } else if (from === "Kelvin") {
    if (to === "Celsius") converted = temp - 273.15;
    else if (to === "Fahrenheit") converted = ((temp - 273.15) * 9) / 5 + 32;
    else if (to === "Kelvin") converted = temp;
  }

  // Final output with two lines
  result.innerHTML =
    "✅ " +
    temp +
    " " +
    from +
    " = " +
    converted.toFixed(2) +
    " " +
    to +
    "<br><br>🔹 This conversion is based on standard formulas." +
    "<br>🔹 Enter another value to calculate again!";
}

// ----------- Auto Update Feature -----------
document.getElementById("temp").addEventListener("input", convertTemp);
document.getElementById("from").addEventListener("change", convertTemp);
document.getElementById("to").addEventListener("change", convertTemp);
