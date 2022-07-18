function mobileMenu() {
  document.getElementById("hambur_menu").style.dipslay  = "flex";
  document.getElementsByClassName("material-symbols-outlined")[0].style.display = "none";
  document.getElementsByClassName("menu_ham_mob")[0].style.display = "flex";

  document.getElementsByClassName("navmenu")[0].style.flexDirection  = "column-reverse";
  document.getElementsByClassName("ham_menu")[0].style.display = "flex";
  document.getElementsByClassName("ham_menu")[1].style.display = "flex";
  document.getElementsByClassName("ham_menu")[2].style.display = "flex";
  console.log("correct ");
}

function desktopMob() {
  var gets = document.getElementsByClassName("material-symbols-outlined")[0].style.display = "flex";
  document.getElementsByClassName("menu_ham_mob")[0].style.display = "none";
  document.getElementsByClassName("ham_menu")[0].style.display = "none";
  document.getElementsByClassName("ham_menu")[1].style.display = "none";
  document.getElementsByClassName("ham_menu")[2].style.display = "none";
  console.log("correct ", gets);
}

