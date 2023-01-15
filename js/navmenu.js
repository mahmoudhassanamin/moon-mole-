const nav = document.getElementById("n");
const menu = document.getElementById("m");
menu.onclick = function(){
  if (nav.style.display !== "none") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
};
