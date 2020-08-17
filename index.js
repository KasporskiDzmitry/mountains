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