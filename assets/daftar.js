function cekformdaftar() {
  let kodedaftar = "MHS";
  //mendapatkan tgl hari
  let tgl_hariini = new Date();
  //console.log(tgl_hariini);
  let bulan = tgl_hariini.getMonth(); //bulan sekarang
  let tahun = tgl_hariini.getFullYear(); //tahun sekarang
  document.getElementById("kode").value = kodedaftar + bulan + tahun;
}

window.onload = function () {
  cekformdaftar();
};

function setup() {
  //document.getElementById("btndaftar").disabled = true;
}
document.getElementById("nama").onkeyup = function () {
  let txtnama = document.getElementById("nama").value; //
  // console.log(txtnama);
  let txtnama2 = txtnama.toUpperCase();
  // console.log(txtnama2);
  document.getElementById("nama").value = txtnama2;
};

function hitungumur(dateString) {
  date = dateString;
  var today = new Date();
  var birthday = new Date(date);
  var year = 0;
  if (today.getMonth() < birthday.getMonth()) {
    year = 1;
  } else if (today.getMonth() == birthday.getMonth() && today.getDate() < birthday.getDate()) {
    year = 1;
  }
  var age = today.getFullYear() - birthday.getFullYear() - year;

  if (age < 0) {
    age = 0;
  }

  document.getElementById("tampilumur").innerHTML = "<b>" + age + "Tahun</b>";
  if (age <= 17) {
    document.getElementById("btndaftar").disabled = true;
    alert("Mohon Maaf Anda Belum Bisa Mendaftar Karena Belum 18 Tahun");
  } else {
    document.getElementById("btndaftar").disabled = false;
  }
}

document.getElementById("alamat").onchange = function () {
  let txtalamat = document.getElementById("alamat").value;
  let jml_karakter = txtalamat.length;
  if (Number(jml_karakter) >= 30) {
    document.getElementById("note").style.display = "none";
  } else {
    document.getElementById("note").style.display = "inline";
  }
};

document.getElementById("btndaftar").onclick = function () {
  let kode = document.getElementById("kode").value;
  let nama = document.getElementById("nama").value;
  let tempat = document.getElementById("tempatlahir").value;
  let tgllahir = document.getElementById("tgllahir").value;

  let email = document.getElementById("email").value;
  let alamat = document.getElementById("alamat").value;
  //radio jenis kelamin
  let jk = "";
  if (document.getElementById("jk1").checked == true) {
    jk = document.getElementById("jk1").value;
  }
  if (document.getElementById("jk2").checked == true) {
    jk = document.getElementById("jk2").value;
  }
  //checkbox hoby
  let cekhobi1 = "";
  let cekhobi2 = "";
  if (document.getElementById("ckcod").checked == true) {
    cekhobi1 = "Coding";
  }
  if (document.getElementById("ckbaca").checked == true) {
    cekhobi2 = "Baca";
  }
  let Hobi = cekhobi1 + "," + cekhobi2;
  //console.log(Hobi);

  let datarows = "<tr>";
  datarows += "<td>" + kode + "</td>";
  datarows += "<td>" + nama + "</td>";
  datarows += "<td>" + tempat + ", " + tgllahir + "</td>";
  datarows += "<td>" + jk + "</td>";
  datarows += "<td>" + email + "</td>";
  datarows += "<td>" + alamat + "</td>";
  datarows += "</tr>";
  document.getElementById("rows_tabel").innerHTML = datarows;
};
