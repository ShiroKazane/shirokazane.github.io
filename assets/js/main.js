document.querySelector('.toggle').onclick = function () {
    document.querySelector('body').classList.toggle('active')
    document.querySelector('.toggle').classList.toggle('active')
    document.querySelector('.navigation').classList.toggle('active')
    document.querySelector('.sec').classList.toggle('active')
    if (!document.querySelector('body').classList.length) {
        document.querySelector('body').removeAttribute('class');
    }
}

if (localStorage.getItem('theme')) {
    document.querySelector('body').classList.toggle(localStorage.getItem('theme'))
}

document.querySelector('.themeSwitch').onclick = function () {
    document.querySelector('body').classList.toggle('light')
    localStorage.setItem('theme', document.querySelector('body').classList.value)
    if (!document.querySelector('body').classList.length) {
        document.querySelector('body').removeAttribute('class');
    }
}