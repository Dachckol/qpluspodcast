function menu_toggle() {
  let x = document.getElementById("nav");
  if (x.className === "responsive") {
    x.className = "";
  } else {
    x.className = "responsive";
  }
}


function close_menu() {
  let x = document.getElementById("nav");
  x.className = "";
}


function scrolled() {
  let home = document.getElementById("home");
  let height = home.clientHeight;
  let scrolled = window.scrollY;
  let x = document.getElementById("nav");
  if (x.className.includes("responsive")) return;
  if (scrolled >= height - 50) {
    if (!x.className.includes("invert")) {
     x.className = "invert";
    }
  } else {
     x.className = "";
  }
}
