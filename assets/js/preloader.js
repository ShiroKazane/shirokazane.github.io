window.onload = function() {
    window.setTimeout(function() {
        document.querySelector('body').classList.remove('is-preload');
        document.querySelector('.preloader').style.display = 'none';
    }, 100);
}