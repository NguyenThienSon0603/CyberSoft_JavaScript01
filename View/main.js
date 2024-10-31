const showBaiTap = document.querySelectorAll('main section');
const btnActive = document.querySelectorAll('#menuBaiTap div div');

btnActive.forEach((item, index) => {
    item.addEventListener('click', ()=>{
        // button được click sẽ add class active và thay đổi icon book
        item.classList.toggle('active');

        let iconActive = item.querySelector('#icon-book');
        if(item.classList.contains('active')){
            iconActive.classList.replace('fa-book', 'fa-book-open');
        } else {
            iconActive.classList.replace('fa-book-open', 'fa-book');
        }
        removeActive(index);

        // hiển thị nội dung bài tập tương ứng khi user click vào button
        showBaiTap.forEach((item2, index2) => {
            item2.classList.toggle('active');
            if(index != index2) item2.classList.remove('active');
        })

    })
})

// function xóa class active khi user click button khác đồng thời thay đổi icon book
function removeActive(index1){
    btnActive.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove('active');

            let iconActive = item2.querySelector('#icon-book');
            iconActive.classList.replace('fa-book-open', 'fa-book');
            
        }
    })
}
