window.addEventListener('DOMContentLoaded',() => {

    const btns = document.querySelectorAll('.btn-read');
    const hiddenElem = document.querySelector('.menu__items');
    const arr = document.querySelector('.arrow');

    function scrollNext() {
        // let pageHeight = window.innerHeight + 1;

        // window.scrollTo(0, (pageHeight));
        // console.log(pageHeight);
        hiddenElem.scrollIntoView({block: "start", behavior: "smooth"});
    }

    btns.forEach(btn => {
        btn.addEventListener('click', scrollNext);
    }); 
    arr.addEventListener('click', scrollNext);

});
