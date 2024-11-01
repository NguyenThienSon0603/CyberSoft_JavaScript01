import {tuyenSinh} from '../Controller/processingData.js';
import {tinhTienDien} from '../Controller/processingData.js';
import {tinhThue} from '../Controller/processingData.js';
import {tinhTienCap} from '../Controller/processingData.js';

// format đơn vị tiền tệ VNĐ
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

// format đơn vị tiền tệ Dollar
const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

// ============================================== BÀI TẬP 01 =========================================================================================
document.getElementById('qlts').onsubmit = (e) => {
    // chặn reload trang khi có sự kiện onsubmit
    e.preventDefault();
    // lấy tất cả thẻ input và select trong form => lưu thành 1 mảng
    const thongTin = document.querySelectorAll('#qlts input, #qlts select');
    // khởi tạo 1 đối tượng để lưu giá trị lấy ra từ form
    const arrTuyenSinh = {};
    // duyệt các thành phần trong mảng để lấy giá trị lưu vào đối tượng arrTuyenSinh
    thongTin.forEach(elements => {
        const id = elements.id;
        arrTuyenSinh[id] = elements.value;
    });
    // khởi tạo biến và gán giá trị của đối tượng arrTuyenSinh vào biến
    const {diemChuan, khuVuc, doiTuong, monThi01, monThi02, monThi03} = arrTuyenSinh;
    // khởi tạo và gọi lại class tuyenSinh
    const thongTinTT = new tuyenSinh(diemChuan, khuVuc, doiTuong, monThi01, monThi02, monThi03);
    // hiển thị thông tin lên giao diện
    document.getElementById('kqDiemChuan').innerHTML = diemChuan;
    document.getElementById('kqUuTien').innerHTML = thongTinTT.doiTuongUuTien();
    document.getElementById('kqMonThi01').innerHTML = monThi01;
    document.getElementById('kqMonThi02').innerHTML = monThi02;
    document.getElementById('kqMonThi03').innerHTML = monThi03;
    document.getElementById('kqTongDiem').innerHTML = thongTinTT.tinhDiem();
    document.getElementById('ketQua').innerHTML = thongTinTT.ketQua();
}

// ============================================== BÀI TẬP 02 =========================================================================================
document.getElementById('tinhTienDien').onsubmit = (e) => {
    e.preventDefault();
    const soKi = document.getElementById('txtSoKiDien').value;
    const ttTienDien = new tinhTienDien(soKi).tinhTien();
    document.getElementById('kqTongTien').innerHTML = VND.format(ttTienDien).replace('₫','VNĐ');
}

// ============================================== BÀI TẬP 03 =========================================================================================
document.getElementById('tinhThue').onsubmit = (e) => {
    e.preventDefault();
    const tongThuNhapNam = document.getElementById('txtTongThuNhap').value;
    const soNguoiPhuThuoc = document.getElementById('txtNguoiPhuThuoc').value;
    const hoTen = document.getElementById('txtHoTen').value;

    const tinhThueCaNhan = new tinhThue(tongThuNhapNam, soNguoiPhuThuoc);
    const thueSuat = tinhThueCaNhan.thueSuat() * 1000000;
    const thuNhapChiuThue = tinhThueCaNhan.thuNhapChiuThue();

    document.getElementById('hoTen').innerHTML = hoTen;
    document.getElementById('tongThuNhapNam').innerHTML = VND.format(tongThuNhapNam).replace('₫','VNĐ');
    document.getElementById('soNguoiPhuThuoc').innerHTML = soNguoiPhuThuoc;
    document.getElementById('tongThuNhapChiuThue').innerHTML = VND.format(thuNhapChiuThue).replace('₫','VNĐ');
    document.getElementById('tongThuePhaiDong').innerHTML = VND.format(parseInt(thueSuat)).replace('₫','VNĐ');
}
// ============================================== BÀI TẬP 04 =========================================================================================
document.getElementById('txtLoaiKH').addEventListener('change', () => {
    let loaiKH = document.getElementById('txtLoaiKH').value;
    if(loaiKH === '0'){
        document.getElementById('txtSoKN').value = '1';
        document.getElementById('txtSoKN').setAttribute('placeholder','1');
        document.getElementById('txtSoKN').setAttribute('disabled','none');
        return;
    }
    document.getElementById('txtSoKN').removeAttribute('disabled');
    document.getElementById('txtSoKN').setAttribute('placeholder','Nhập số kết nối');
})

document.getElementById('tinhTienCap').onsubmit = (e) => {
    e.preventDefault();

    const hoTenKH = document.getElementById('txtKhachHang').value;
    let loaiKH = document.getElementById('txtLoaiKH').value;
    const soKN = document.getElementById('txtSoKN').value;
    const soKenh = document.getElementById('txtSoKenh').value;

    const hdTienCap = new tinhTienCap(loaiKH, soKN, soKenh);
    let hdThanhToan = 0;
    let tenLoaiKH = '';

    if(loaiKH === '0') {hdThanhToan = hdTienCap.nhaDan();tenLoaiKH = 'Nhà Dân';}
    if(loaiKH === '1') {hdThanhToan = hdTienCap.doanhNghiep();tenLoaiKH = 'Doanh Nghiệp';}
    
    document.getElementById('hoTenKH').innerHTML = hoTenKH;
    document.getElementById('loaiKH').innerHTML = tenLoaiKH;
    document.getElementById('soKN').innerHTML = soKN;
    document.getElementById('soKenh').innerHTML = soKenh;
    document.getElementById('tongTien').innerHTML = USD.format(hdThanhToan);
}