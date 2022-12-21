// let no = 10;
// // while (no > 0) {
// //   console.log(no);
// //   no--;
// // }
// //---------------------------
// do {
//   console.log(no);
//   no--;
// } while (no >= 2);
// //---------------------------

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     if (i == 2) {
//       document.write("Bilangan Genap: ");
//     }
//     document.write(i + " ,");
//   }
// }

let menu = ["Kalkulator", "Pertandingan Bola", "Pendaftaran", "Setting"];
//panjang array = 3, index 0 sampai 2
let jumlah = menu.length; //4

for (let i = 0; i < jumlah; i++) {
  console.log(menu[i]);
}

function hitungkalkulator() {
  let nilai1 = document.getElementById("nilai1").value;
  let nilai2 = document.getElementById("nilai2").value;
  let operator = document.getElementById("action").value;
  let hasil;
  if (nilai1 == "" || nilai1 == null) {
    alert("nilai-1 belum diisi!!");
  } else if (nilai2 == "" || nilai2 == null) {
    alert("nilai-2 belum diisi!!");
  } else if (operator == "" || operator == null) {
    alert("Operator belum dipilih!");
  } else {
    //menghitung hasil
  }
}

function hasil(nil1, nil2, oper) {}
