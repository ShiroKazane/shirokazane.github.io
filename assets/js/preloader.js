window.onload = function () {
    window.setTimeout(function() {
        document.querySelector('body').classList.remove('is-preload');
    }, 100);

    window.setTimeout(function() {
        document.querySelector('.preloader').style.display = 'none';
    }, 300);
}