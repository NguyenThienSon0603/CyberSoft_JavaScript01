const baitap01 = document.getElementById('baitap01');
const baitap02 = document.getElementById('baitap02');
const baitap03 = document.getElementById('baitap03');
const baitap04 = document.getElementById('baitap04');
const btnBaiTap01 = document.getElementById('btnBaiTap01');
const btnBaiTap02 = document.getElementById('btnBaiTap02');
const btnBaiTap03 = document.getElementById('btnBaiTap03');
const btnBaiTap04 = document.getElementById('btnBaiTap04');


btnBaiTap01.onclick = () => {
    document.getElementById('baitap01').classList.toggle('active');
    removeActive(baitap02, baitap03, baitap04);
}
btnBaiTap02.onclick = () => {
    document.getElementById('baitap02').classList.toggle('active');
    removeActive(baitap01, baitap03, baitap04);
}
btnBaiTap03.onclick = () => {
    document.getElementById('baitap03').classList.toggle('active');
    removeActive(baitap01, baitap02, baitap04);
}
btnBaiTap04.onclick = () => {
    document.getElementById('baitap04').classList.toggle('active');
    removeActive(baitap01, baitap02, baitap03);
}

function removeActive(idActive1, idActive2, idActive3){
    idActive1.classList.remove('active');
    idActive2.classList.remove('active');
    idActive3.classList.remove('active');
}