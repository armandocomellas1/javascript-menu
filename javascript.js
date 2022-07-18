function mobileMenu() {
  document.getElementById('hambur_menu').style.dipslay = 'flex';
  document.getElementsByClassName('material-symbols-outlined')[0].style.display = 'none';
  document.getElementsByClassName('name_head')[0].style.display = 'none';
  document.getElementsByClassName('menu_ham_mob')[0].style.display = 'flex';
  document.getElementsByClassName('ham_menu')[0].style.display = 'flex';
  document.getElementsByClassName('ham_menu')[1].style.display = 'flex';
  document.getElementsByClassName('ham_menu')[2].style.display = 'flex';
}
mobileMenu();
function desktopMob() {
  document.getElementsByClassName('name_head')[0].style.display = 'flex';
  document.getElementsByClassName('material-symbols-outlined')[0].style.display = 'flex';
  document.getElementsByClassName('menu_ham_mob')[0].style.display = 'none';
  document.getElementsByClassName('ham_menu')[0].style.display = 'none';
  document.getElementsByClassName('ham_menu')[1].style.display = 'none';
  document.getElementsByClassName('ham_menu')[2].style.display = 'none';
}
desktopMob();