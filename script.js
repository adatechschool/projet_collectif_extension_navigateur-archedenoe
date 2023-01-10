//Images des icones
let animalicon = {
  Vautour: "https://cdn-icons-png.flaticon.com/512/2149/2149977.png",
  Coccinelle:
    "https://cdn.icon-icons.com/icons2/2070/PNG/512/ladybug_icon_126534.png",
  Hippocampe:
    "https://cdn.icon-icons.com/icons2/2070/PNG/512/seahorse_icon_126006.png",
  Lynx: "https://static.thenounproject.com/png/291916-200.png",
};

//Fonction pour avoir un nombre random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let count = getRandomInt(10);

//Fonction avec fetch de l'api Unsplash pour une image random
function changeimage(animal) {
  fetch(
    "https://api.unsplash.com/search/photos?query=" +
      animal +
      "&client_id=KlNUpmhuFzyX_hVlLRCmrNJw6zfCaGuLczhVSW-6lY4"
  )
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      let image = document.getElementsByTagName("img");
      console.log(image);
      for (let i = 0; i < image.length; i++) {
        image[i].src = value.results[count].urls.small;
        count++;
        if (count == 10 ){
          count = 0;
        }
      }
    });
}

// Creation d'une div
var divButtons = document.createElement("div");
divButtons.className = "div-buttons";
divButtons.style.backgroundColor = "black";
divButtons.style.position = "fixed";
divButtons.style.zIndex = "100";
divButtons.style.bottom = "0px";
divButtons.style.left = "50%";
divButtons.style.transform = "translateX(-50%)";
divButtons.style.border = "3px solid white";
divButtons.style.borderRadius = "20px";
document.body.appendChild(divButtons);

// Creation des boutons
let button1 = document.createElement("button");
button1.type = "button";
button1.className = "btn-styled";
button1.onclick = function () {
  changeimage("vulture");
};
divButtons.appendChild(button1);

let button2 = document.createElement("button");
button2.type = "button";
button2.className = "btn-styled";
button2.onclick = function () {
  changeimage("lynx");
};
divButtons.appendChild(button2);

let button3 = document.createElement("button");
button3.type = "button";
button3.className = "btn-styled";
button3.onclick = function () {
  changeimage("seahorse");
};
divButtons.appendChild(button3);

let button4 = document.createElement("button");
button4.type = "button";
button4.className = "btn-styled";
button4.onclick = function () {
  changeimage("ladybug");
};
divButtons.appendChild(button4);

// Css des boutons
button1.style.background = `url(${animalicon.Vautour})`;
button1.style.filter = "invert(1)";
button1.style.border = "2px solid black";
button1.style.borderRadius = "20px 0% 0% 20px";

button2.style.background = `url(${animalicon.Lynx})`;
button2.style.filter = "invert(1)";
button2.style.border = "2px solid black";

button3.style.background = `url(${animalicon.Hippocampe})`;
button3.style.border = "2px solid white";

button4.style.background = `url(${animalicon.Coccinelle})`;
button4.style.border = "2px solid white";
button4.style.borderRadius = "0px 20px 20px 0px";

let allButtons = document.getElementsByClassName("btn-styled");
 
for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].style.backgroundSize = "cover";
  allButtons[i].style.fontSize = "20px";
  allButtons[i].style.width = "70px";
  allButtons[i].style.height = "70px";
}
