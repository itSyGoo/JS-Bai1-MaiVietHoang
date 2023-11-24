//Bài 1: tính tiền lương
document.querySelector(".btn-danger").onclick = function () {
  var a = document.getElementById("soNgayLam").value * 1;
  var ketQua = a * 100000;
  document.getElementById("ketQua").innerHTML = ketQua;
};

//Bài 2: tính giá trị trung bình
document.querySelector(".btn-dark").onclick = function () {
  var soThu1 = document.getElementById("soThu1").value * 1;
  var soThu2 = document.getElementById("soThu2").value * 1;
  var soThu3 = document.getElementById("soThu3").value * 1;
  var soThu4 = document.getElementById("soThu4").value * 1;
  var soThu5 = document.getElementById("soThu5").value * 1;
  var ketQua1 = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  document.getElementById("ketQua1").innerHTML = ketQua1;
};

//Bài 3: đổi tiền USD => VND
document.querySelector(".btn-primary").onclick = function () {
  var nhapTienDo = document.getElementById("nhapTienDo").value * 1;
  var ketQua2 = nhapTienDo * 23500;
  document.getElementById("ketQua2").innerHTML = ketQua2.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  );
};

//Bài 4: Tính diện tích chu vi hình chữ nhật
document.querySelector(".btn-secondary").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var chuVi = (chieuDai + chieuRong) * 2;
  var dienTich = chieuDai * chieuRong;
  document.getElementById(
    "ketQua3"
  ).innerHTML = `Diện tích hình chữ nhật là: ${dienTich}, Chu vi hình chữ nhật là: ${chuVi}`;
};

//Bài 5: Tính tổng 2 ký số
document.querySelector(".btn-warning").onclick = function () {
  var nhapSo = document.getElementById("nhapSo").value * 1;
  donVi = nhapSo % 10;
  hangChuc = Math.floor(nhapSo / 10);
  tongKiSo = donVi + hangChuc;
  document.getElementById("ketQua4").innerHTML = tongKiSo;
};
