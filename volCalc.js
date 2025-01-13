document.getElementById("submitButton").addEventListener("click", calculate);

document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    calculate();
  }
});

function calculate() {
  let statorWidth = document.getElementById("motor_width").value;
  let statorHeight = document.getElementById("motor_height").value;

  if (statorHeight > 0 && statorWidth > 0) {
    let volume =
      Math.round(Math.pow(statorWidth / 2, 2) * Math.PI * statorHeight * 10) /
      10;
    document.getElementById("resulttext").innerHTML = "Result : " + volume;
    navigator.clipboard.writeText(volume);

    document.getElementById("msg").style.opacity = 1;

    setTimeout(function () {
      document.getElementById("msg").style.opacity = 0;
    }, 3000);
  } else {
    alert("Invalid Input");
  }
}
