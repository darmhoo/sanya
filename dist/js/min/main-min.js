function openMenu(){var e=document.getElementById("subnavmenu");"none"===e.style.display?e.style.display="block":e.style.display="none",menubutton.classList.toggle("menu-opened")}var menubutton=document.getElementById("menubutton");menubutton.addEventListener("click",openMenu);