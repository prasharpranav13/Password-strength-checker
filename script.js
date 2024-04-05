let pass = document.getElementById("password");
let msg = document.getElementById("msg");
let strength = document.getElementById("strength");
let btn = document.getElementById("btn");
pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
    if (pass.value.length < 4) {
      pass.style.borderColor = "red";
      strength.innerHTML = "weak";
      strength.style.color = "red";
    } else if (pass.value.length >= 4 && pass.value.length < 8) {
      pass.style.borderColor = "yellow";
      strength.innerHTML = "medium";
      strength.style.color = "yellow";
    } else if (pass.value.length >= 8) {
      pass.style.borderColor = "green";
      strength.innerHTML = "strong";
      strength.style.color = "green";
    }
  } else {
    msg.style.display = "none";
  }
});
