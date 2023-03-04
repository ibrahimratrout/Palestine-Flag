let body = document.querySelector("body");
  body. style.margin = "0";

  let container = document.createElement("div");
  container.style.width = "100%";
  container.style.height = "100vh";
  container.style.position = "relative";
  body.appendChild(container);

//this code is for black color in flag.

  let black = document.createElement("div");
  black.style.position = "absolute";
  black.style.top = "0";
  black.style.width = "100%";
  black.style.backgroundColor = "black";
  black.style.height = "33.3333%";
  container.appendChild(black);

  //this code is for green color in flag.

  let green = document.createElement("div");
  green.style.position = "absolute";
  green.style.bottom = "0";
  green.style.width = "100%";
  green.style.backgroundColor = "green";
  green.style.height = "33.3333%";
  container.appendChild(green);

  //this code is for red color in flag.

  let red = document.createElement("div");
  red.style.position = "absolute";
  red.style.borderStyle = "solid";
  red.style.borderColor = "transparent transparent transparent red";
  red.style.borderWidth = "50vh";
  container.appendChild(red);