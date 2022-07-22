
document.getElementById("form").addEventListener("submit", logIn);
var regUser = JSON.parse(localStorage.getItem("user")) || [];

function logIn(e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Enter All of the details");
  } else {
    for (var i = 0; i < regUser.length; i++) {
      if (regUser[i].email === email && regUser[i].password === password) {
        alert("Login Sucessfully");
        window.location.href = "index.html";
        return;
      } else if (email == "abc@gmail.com" && password == "abc@123") {
        alert("Admin Login Sucessfully");
        window.location.href = "index.html";
        return;
      }
    }
    alert("Wrong Credintial");
  }
}