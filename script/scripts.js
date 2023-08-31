const toggleMenu = document.getElementById("box-img");

toggleMenu.addEventListener('click', () => {
    document.getElementById('bar-menu-tablet').classList.toggle('active');
    document.getElementById('toggle-menu').classList.toggle('active');
    document.getElementById('menu-logo').classList.toggle('active');
    document.getElementById('box-ul-tablet').classList.toggle('active');
});
