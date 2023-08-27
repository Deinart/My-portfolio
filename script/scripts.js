const toggleActiveMenu = document.getElementById("box-img");

toggleActiveMenu.addEventListener('click', () => {
    document.getElementById('box-menu-mobile').classList.toggle('active');
    document.getElementById('toggle-menu').classList.toggle('active');
    document.getElementById('menu-logo').classList.toggle('active');
    document.getElementById('box-ul').classList.toggle('active');
});
