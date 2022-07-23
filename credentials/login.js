
document.getElementById("form").addEventListener("submit", logIn);
var regUser = JSON.parse(localStorage.getItem("user")) || [];

function logIn(e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;

  if (!name || !password) {
    alert("Enter All of the details");
  } else {
    for (var i = 0; i < regUser.length; i++) {
      if (regUser[i].name === name && regUser[i].password === password) {
        alert("Login Sucessfully");
        sessionStorage.setItem("username",name);
        sessionStorage.setItem("userDetail",JSON.stringify(regUser[i]));
        window.location.href = "../index.html";
        return;
      } else if (name == "abc@gmail.com" && password == "abc@123") {
        alert("Admin Login Sucessfully");
        window.location.href = "../index.html";
        return;
      }
    }
    alert("Wrong Credintial");
  }
}