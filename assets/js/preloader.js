window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

window.onload = function () {
    document.querySelector('body').style.overflowY = 'hidden';
    window.setTimeout(function () {
        document.querySelector('.preloader').style.display = 'none';
        document.querySelector('body').removeAttribute('style');
    }, 500);
}