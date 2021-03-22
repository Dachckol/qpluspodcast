function menu_toggle() {
  var x = document.getElementById("nav");
  if (x.className === "responsive") {
    x.className = "";
  } else {
    x.className = "responsive";
  }
}


function close_menu() {
  var x = document.getElementById("nav");
  x.className = "";
}
