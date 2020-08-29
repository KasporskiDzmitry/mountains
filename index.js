const navbar = document.querySelector('.navbar');
const toggle = document.querySelector('.toggleNavBtn');
let showMenu = false;
toggle.addEventListener('click', ()=> {
    showMenu === false ? showMenu = true : showMenu = false;
    if (showMenu) {
        navbar.style.display = 'block';
    } else  {
        navbar.style.display = 'none';
    }
});

const progressBar = document.querySelector('.progress-bar');
const scrollToTopButton = document.querySelector('.scrollToTopButton');

window.addEventListener('scroll', () => {
    let percent = Math.floor((window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100)
    progressBar.style.width = `${percent}%`;

    if (percent > 10) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});