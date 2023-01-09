let animalurl = {
  Vautour:
    "https://images.unsplash.com/photo-1592315071188-fa61c03a35fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  Coccinelle:
    "https://images.unsplash.com/photo-1611049742877-bd705839ad6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  Hippocampe:
    "https://images.unsplash.com/photo-1595503147345-445c90a74a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1223&q=80",
  Lynx: "https://images.unsplash.com/photo-1604608684575-0478ddb56d48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1133&q=80",
};

function addRedBorder() {
  let redBorder = "2px solid red";
  document.body.style.border = redBorder;
}

function greenh1() {
  let h1 = document.getElementsByTagName("h1");
  for (let i = 0; i < h1.length; i++) {
    h1[i].style.color = "green";
  }
}

function changeimage(newImage) {
  let image = document.getElementsByTagName("img");
  for (let i = 0; i < image.length; i++) {
    image[i].src = newImage;
  }
}

function newFont(newfont) {
  let font = document.getElementsByTagName("*");
  for (let i = 0; i < font.length; i++) {
    font[i].style.fontFamily = newfont;
  }
}

addRedBorder();
greenh1();
// changeimage(animalurl.Vautour);
// newFont("Times New Roman, sans-serif");

var divButtons = document.createElement("div");
divButtons.className = "div-buttons";
divButtons.style.backgroundColor = "pink";
divButtons.style.position = "fixed";
divButtons.style.zIndex = "10";
divButtons.style.bottom = "0px";

document.body.appendChild(divButtons);

var button = document.createElement("button");
button.type = "button";
button.innerHTML = "Press me";
button.className = "btn-styled";
button.onclick = function () {
  changeimage(animalurl.Vautour);
};
divButtons.appendChild(button);

button.style.border = "black 20px solid";
button.style.backgroundColor = "red";
button.style.fontSize = "120px";
button.style.borderRadius = "60px";
