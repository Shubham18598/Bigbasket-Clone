document.getElementById("form").addEventListener("submit", signup);
var arr = JSON.parse(localStorage.getItem("user")) || [];

function signup(e) {
  e.preventDefault();
  console.log("clicked");

  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value;
  var password = document.getElementById("password").value;
  if (!email || !name || !mobile || !password) {
    alert("Enter all of the details");
  } else {
    var userObj = {
      email: email,
      name: name,
      mobile: mobile,
      password: password,
    };
    arr.push(userObj);
    localStorage.setItem("user", JSON.stringify(arr));
    alert("Sign Up Successful!");
    window.location.href = "login.html";
  }
}