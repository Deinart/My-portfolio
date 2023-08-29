const toggleMenu = document.getElementById("box-img");

toggleMenu.addEventListener('click', () => {
    document.getElementById('box-menu-tablet').classList.toggle('active');
    document.getElementById('toggle-menu').classList.toggle('active');
    document.getElementById('menu-logo').classList.toggle('active');
    document.getElementById('box-ul').classList.toggle('active');
});
