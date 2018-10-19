var menubutton = document.getElementById('menubutton');

function openMenu() {
    var subnavmenu = document.getElementById('subnavmenu');
    if (subnavmenu.style.display === 'none') {
        subnavmenu.style.display = 'block';
    } else {
        subnavmenu.style.display = 'none';
    }
    
    menubutton.classList.toggle('menu-opened');
}


menubutton.addEventListener("click", openMenu);  





