// ============================================== BÀI TẬP 01 =========================================================================================
export class tuyenSinh {
    constructor(_diemChuan, _khuVuc, _doiTuong, _monThi01, _monThi02, _monThi03) {
        this.diemChuan = _diemChuan;
        this.khuvuc = _khuVuc;
        this.doiTuong = _doiTuong;
        this.sub01 = _monThi01;
        this.sub02 = _monThi02;
        this.sub03 = _monThi03;
    }

    doiTuongUuTien(){
        return parseFloat(this.khuvuc) + parseFloat(this.doiTuong);
    }
    tinhDiem() {
        return parseInt(this.sub01) + parseInt(this.sub02) + parseInt(this.sub03) + parseFloat(this.khuvuc) + parseFloat(this.doiTuong);
    }
    ketQua(){
        const tongDiem = this.tinhDiem();
        if(tongDiem >= this.diemChuan) return "Đậu";
        return "Rớt";
    }
}
// ============================================== BÀI TẬP 02 =========================================================================================
export class tinhTienDien{
    constructor(_soKi){
        this.soKi = _soKi;
    }
    tinhTien(){
        const soKi = parseInt(this.soKi);

        if(soKi <= 50) return soKi * 500;
        if(soKi > 50 && soKi <= 100) return (50 * 500) + ((soKi - 50) * 650);
        if(soKi > 100 && soKi <= 200) return (50 * 500) + (50 * 650) + ((soKi - 100) * 850);
        if(soKi > 200 && soKi <= 350) return (50 * 500) + (50 * 650) + (100 * 850) + ((soKi - 200) * 1100);
        if(soKi > 350 ) return (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((soKi - 350) * 1300); 
    }
}
// ============================================== BÀI TẬP 03 =========================================================================================
export class tinhThue{
    constructor(_tongThuNhapNam, _soNguoiPhuThuoc){
        this.tongThuNhapNAm = _tongThuNhapNam;
        this.soNguoiPhuThuoc = _soNguoiPhuThuoc;
    }

    thuNhapChiuThue(){
        return parseInt(this.tongThuNhapNAm) - 4000000 - (parseInt(this.soNguoiPhuThuoc) * 1600000);
    }
    thueSuat(){
        const thuNhapChiuThue = this.thuNhapChiuThue() / 1000000;

        if(thuNhapChiuThue > 0 && thuNhapChiuThue <= 60) return thuNhapChiuThue * 0.05;
        if(thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) return thuNhapChiuThue * 0.1;
        if(thuNhapChiuThue > 120 && thuNhapChiuThue <= 210) return thuNhapChiuThue * 0.15;
        if(thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) return thuNhapChiuThue * 0.2;
        if(thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) return thuNhapChiuThue * 0.25;
        if(thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) return thuNhapChiuThue * 0.3;
        if(thuNhapChiuThue > 960) return thuNhapChiuThue * 0.35;
        return 0;
    }
}
// ============================================== BÀI TẬP 04 =========================================================================================
export class tinhTienCap{
    constructor(_loaiKH, _soKN, _soKenh){
        this.loaiKH = _loaiKH;
        this.soKN = _soKN;
        this.soKenh = _soKenh;
    }

    nhaDan(){
        return 4.5 + 20.5 + (parseInt(this.soKenh) * 7.5);
    }
    doanhNghiep(){
        const ketNoiThem = parseInt(this.soKenh) - 10;
        if(ketNoiThem <= 0) return 90 + (parseInt(this.soKenh) * 50); 
        return 90 + (ketNoiThem * 5) + (parseInt(this.soKenh) * 50);
    }
}