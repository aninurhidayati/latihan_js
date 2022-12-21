document.getElementById("judul").innerText = "Form Login";
document.getElementById("judul").style.color = "blue";
// document.getElementsByTagName("h1")[0].innerHTML = "Form Login";
// document.getElementsByClassName("title")[0].innerHTML = "Form Login";
// document.getElementById("username").value = "Ani"; mendefinisikan value
// document.getElementById("password").value = "123";
//dummy database
const userlog = "admin";
const passlog = "1234";

//function tanpa paramater
function ceklogin() {
  let usernamex, passwordx;
  usernamex = document.getElementById("user").value; //menampung value
  passwordx = document.getElementById("password").value;

  if (userlog === usernamex && passlog === passwordx) {
    pesan("Login Berhasil");
    window.location.href = "home.html";
  } else {
    alert("Username dan Password tidak sesuai!!");
    clear();
  }
  // switch (true) {
  //   case userlog === usernamex && passlog === passwordx:
  //     pesan("Login Berhasil", "");
  //     break;
  //   default:
  //     alert("Username dan Password tidak sesuai!!");
  // }
}

//function dg parameter
function pesan(message, user) {
  //login gagal
  alert(message + user);
  clear();
}

function clear() {
  document.getElementById("user").value = "";
  document.getElementById("password").value = "";
}
