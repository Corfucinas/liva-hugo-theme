// Preloader js
window.onload = function () {
    //hide the preloader
    document.querySelector(".preloader").style.display = "none";
};


// Search open
document.querySelector('#searchOpen').addEventListener('click', function () {
    document.querySelector('.search-wrapper').classList.add('open');
});

// Search close
document.querySelector('#searchClose').addEventListener('click', function () {
    document.querySelector('.search-wrapper').classList.remove('open');
});
