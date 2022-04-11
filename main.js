//! Bài 1
//* Tính Lương Nhân Viên
/*
+ Đầu vào:
    - số ngày làm
    - lương 1 ngày = 100000
+ Xử lý
    lương  = số ngày làm * lương 1 ngày
+ Đầu ra
    Số lương có được 
*/
document.getElementById("luong").onclick = function () {
    var luong_1_ngay = 100000;
    var so_ngay_lam = document.getElementById("songay").value;
    var luong = luong_1_ngay * so_ngay_lam;

    //show kết quả ra UI
    document.getElementById("soluong").innerHTML = "Số lương của bạn là: " + luong;
};

//! Bài 2
//* Tính giá trị trung bình
/*
+ Đầu vào:
    - số thực 1
    - số thực 2
    - số thực 3
    - số thực 4
    - số thực 5
+ Xử lý
    trung bình = (st1 + st2 + st3 + st4 + st5) / 5
+ Đầu ra
    Giá trị trung bình của 5 số
*/
document.getElementById("btnTB").onclick = function () {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var number4 = document.getElementById("number4").value;
    var number5 = document.getElementById("number5").value;
    var tb = (number1 + number2 + number3 + number4 + number5) / 5;

    //show kết quả ra UI
    document.getElementById("tinhTB").innerHTML = "Kết quả là: " + tb;
}

//! Bài 3
//* Đổi tiền
/*
+ Đầu vào:
   số USD người dùng muốn đổi
   1 USD = 23000 VNĐ
+ Xử lý
    Số tiền tiền quy đổi = 1 USD * Số USD người dùng muốn đổi
+ Đầu ra
    Số tiền quy đổi ra VNĐ
*/
document.getElementById("btnDoiTien").onclick = function(){
    var soUsd = document.getElementById("sotien").value;
    var usd = 23000;

    var doi_tien = usd * soUsd;
     //show kết quả ra UI
     document.getElementById("doitien").innerHTML = "Số tiền của bạn là: "+doi_tien;

};

//! Bài 4 
//* Chu vi diện tích hình chữ nhật
/*
+ Đầu vào:
   Chiều dài HCN
   Chiều rộng HCN
+ Xử lý
    Diện tính HCN = chiều dài * chiều rộng
    Chu vi HCN = (chiều dài + chiều rộng) * 2
+ Đầu ra
    Chu vi và diện tích HCN
*/
document.getElementById("btnDienTich").onclick = function(){
    var chieuDai = document.getElementById("chieudai").value;
    var chieuRong = document.getElementById("chieurong").value;

    var dientich = chieuDai * chieuRong;

    //show kết quả ra UI
    document.getElementById("dientich").innerHTML = "Diện tích là: "+dientich;
}
document.getElementById("btnChuVi").onclick = function(){
    var chieuDai = document.getElementById("chieudai").value * 1;
    var chieuRong = document.getElementById("chieurong").value * 1;

    var chuvi = (chieuDai + chieuRong) * 2;

    //show kết quả ra UI
    document.getElementById("chuvi").innerHTML = "Diện tích là: "+chuvi;
}
//! Bài 5
//* Tính tổng 2 kí số
/*
+ Đầu vào:
   Số có 2 chữ số 
+ Xử lý
    Tổng kí số = số hàng đơn vị + số hàng chục
    số hàng đơn vị = so % 10;
    số hàng chục = so / 10;
+ Đầu ra
    Tổng 2 kí số
*/
document.getElementById("btnTinhtong").onclick = function(){
    var number = document.getElementById("number").value;
    var so_hang_don_vi = number % 10;
    var so_hang_chuc = Math.floor(number/10);

    var tongKiSo = so_hang_don_vi + so_hang_chuc;

    document.getElementById("tong2so").innerHTML = "Tổng 2 số là: "+tongKiSo;
}