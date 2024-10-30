document.getElementById('btnBaiTap01').onclick = () => {
    activeMenu('btnBaiTap01');
    document.getElementById('baitap01').classList.toggle('active');
}
document.getElementById('btnBaiTap02').onclick = () => {
    activeMenu('btnBaiTap02');
    document.getElementById('baitap02').classList.toggle('active');

}
document.getElementById('btnBaiTap03').onclick = () => {
    activeMenu('btnBaiTap03');
    document.getElementById('baitap03').classList.toggle('active');

}
document.getElementById('btnBaiTap04').onclick = () => {
    activeMenu('btnBaiTap04');
    document.getElementById('baitap04').classList.toggle('active');

}

function activeMenu(idActive) {
    let active = document.querySelector('#' + idActive + ' #icon-book');

    if (active.classList.contains('fa-book')) {
        active.classList.replace('fa-book', 'fa-book-open');
    }
    else {
        active.classList.replace('fa-book-open', 'fa-book');
    }
}