let animalurl =
{
  Vautour: "https://images.unsplash.com/photo-1592315071188-fa61c03a35fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  Coccinelle: "https://images.unsplash.com/photo-1611049742877-bd705839ad6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  Hippocampe: "https://images.unsplash.com/photo-1595503147345-445c90a74a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1223&q=80",
  Lynx: "https://images.unsplash.com/photo-1604608684575-0478ddb56d48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1133&q=80",
};

let animalicon = 
{
  Vautour: "https://cdn-icons-png.flaticon.com/512/2149/2149977.png",
  Coccinelle: "https://cdn.icon-icons.com/icons2/2070/PNG/512/ladybug_icon_126534.png",
  Hippocampe: "https://cdn.icon-icons.com/icons2/2070/PNG/512/seahorse_icon_126006.png",
  Lynx: "https://static.thenounproject.com/png/291916-200.png" 
};

function addRedBorder() 
{
  let redBorder = "2px solid red";
  document.body.style.border = redBorder;
}

function greenh1() 
{
  let h1 = document.getElementsByTagName("h1");
  for (let i = 0; i < h1.length; i++) 
  {
    h1[i].style.color = "green";
  }
}

function changeimage(newImage) 
{
  let image = document.getElementsByTagName("img");
  for (let i = 0; i < image.length; i++) 
  {
    image[i].src = newImage;
  }
}

function newFont(newfont) 
{
  let font = document.getElementsByTagName("*");
  for (let i = 0; i < font.length; i++) 
  {
    font[i].style.fontFamily = newfont;
  }
}

addRedBorder();
greenh1();
// newFont("Times New Roman, sans-serif");

// Creation d'une div
var divButtons = document.createElement("div");
divButtons.className = "div-buttons";
divButtons.style.backgroundColor = "black";
divButtons.style.position = "fixed";
divButtons.style.zIndex = "10";
divButtons.style.bottom = "0px";
divButtons.style.left = "50%"
divButtons.style.transform = "translateX(-50%)";
document.body.appendChild(divButtons);


// Creation des boutons
let button1 = document.createElement("button");
button1.type = "button";
button1.className = "btn-styled";
button1.onclick = function () 
{
  changeimage(animalurl.Vautour);
};
divButtons.appendChild(button1);

let button2 = document.createElement("button");
button2.type = "button";
button2.className = "btn-styled";
button2.onclick = function () 
{
  changeimage(animalurl.Lynx);
};
divButtons.appendChild(button2);

let button3 = document.createElement("button");
button3.type = "button";
button3.className = "btn-styled";
button3.onclick = function () 
{
  changeimage(animalurl.Hippocampe);
};
divButtons.appendChild(button3);

let button4 = document.createElement("button");
button4.type = "button";
button4.className = "btn-styled";
button4.onclick = function () 
{
  changeimage(animalurl.Coccinelle);
};
divButtons.appendChild(button4);


// Css des boutons
button1.style.background = `url(${animalicon.Vautour})`;
button1.style.backgroundSize = "cover";
button1.style.filter = "invert(1)";
button1.style.fontSize = "20px";
button1.style.height = "70px";
button1.style.width = "70px";

button2.style.background = `url(${animalicon.Lynx})`;
button2.style.backgroundSize = "cover";
button2.style.filter = "invert(1)";
button2.style.fontSize = "20px";
button2.style.width = "70px";
button2.style.height = "70px";

button3.style.background = `url(${animalicon.Hippocampe})`;
button3.style.backgroundSize = "cover";
button3.style.fontSize = "20px";
button3.style.width = "70px";
button3.style.height = "70px";
button3.style.border = "2px solid white";

button4.style.background = `url(${animalicon.Coccinelle})`;
button4.style.backgroundSize = "cover";
button4.style.fontSize = "20px";
button4.style.width = "70px";
button4.style.height = "70px";
button4.style.border = "2px solid white";

