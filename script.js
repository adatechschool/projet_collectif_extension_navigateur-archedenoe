// Recuperer l'id
let ExtensionId = chrome.runtime.id;

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
        if (count == 10) {
          count = 0;
        }
      }
    });
}

// changer la couleur des boutons
function changeButton(btn) {
  if (btn.style.backgroundColor == "black") {
    for (let i = 0; i < allButtons.length; i++) {
      if (allButtons[i] == btn) {
        btn.style.backgroundColor = "#99ff99";
      } else {
        allButtons[i].style.backgroundColor = "black";
      }
    }
  } else {
    btn.style.backgroundColor = "black";
  }
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
  changeButton(button1);
};
divButtons.appendChild(button1);

let button2 = document.createElement("button");
button2.type = "button";
button2.className = "btn-styled";
button2.onclick = function () {
  changeimage("lynx");
  changeButton(button2);
};
divButtons.appendChild(button2);

let button3 = document.createElement("button");
button3.type = "button";
button3.className = "btn-styled";
button3.onclick = function () {
  changeimage("seahorse");
  changeButton(button3);
};
divButtons.appendChild(button3);

let button4 = document.createElement("button");
button4.type = "button";
button4.className = "btn-styled";
button4.onclick = function () {
  changeimage("ladybug");
  changeButton(button4);
};
divButtons.appendChild(button4);

// Css des boutons
button1.style.background = `url(${
  "chrome-extension://" + ExtensionId + "/images/vautour-modified.png"
})`;
button1.style.borderRadius = "20px 0% 0% 20px";

button2.style.background = `url(${
  "chrome-extension://" + ExtensionId + "/images/lynx-modified.png"
})`;

button3.style.background = `url(${
  "chrome-extension://" + ExtensionId + "/images/hippocampe.png"
})`;

button4.style.background = `url(${
  "chrome-extension://" + ExtensionId + "/images/coccinelle.png"
})`;
button4.style.borderRadius = "0px 20px 20px 0px";

let allButtons = document.getElementsByClassName("btn-styled");

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].style.backgroundSize = "cover";
  allButtons[i].style.width = "70px";
  allButtons[i].style.height = "70px";
  allButtons[i].style.backgroundColor = "black";
  allButtons[i].style.border = "2px solid white";
}

let statut = 0;

function arrivingFromLeft(allDivs) {
  for (let k = 0; k < allDivs.length; k++) {
    var pos = -100;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        console.log("test")
        clearInterval(id);
      } else {
        pos++;
        allDivs[k].style.left = pos + "px";
      }
    }
  }statut = 1;

}

function leavingToLeft(allDivs) {
  return function () {
    for (let k = 0; k < allDivs.length; k++) {
    var pos = 340;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == -100) {
        clearInterval(id);
      } else {
        pos--;
        allDivs[k].style.left = pos + "px";
      }
      }
    }
  }
}


// fonction AFK
let inactivityTime = function (allDivs) {
  let time;
  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;
  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(function () {
      clearTimeout(time);
      arrivingFromLeft(allDivs);
      if (statut == 1 ){
        console.log("test")
        document.onmousemove = leavingToLeft(allDivs);
        document.onkeypress = leavingToLeft(allDivs);
        statut = 0;
      } 
    }, 1000);

  }
  
};


let divnews = document.createElement("div");
divnews.className = "Info";

let divnews2 = document.createElement("div");
divnews2.className = "Info";

let divnews3 = document.createElement("div");
divnews3.className = "Info";

// Fonction API News
function Newanimal() {
  let nom = "seahorse";

  fetch("https://api.api-ninjas.com/v1/animals?name=" + nom, {
    headers: { "X-Api-Key": "A8Se3TXGr1J+WsnbVJEwSw==GikJKEs7eqMvdvLx" },
  })
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
     
      // Creation DivNews
      divnews.innerHTML =
        "Régime alimentaire : " + value[0].characteristics.diet;
      document.body.appendChild(divnews);

      divnews2.innerHTML =
        "Régime alimentaire 2 :" + value[0].characteristics.diet;
      document.body.appendChild(divnews2);
      
      divnews3.innerHTML =
        "Régime alimentaire 3 :" + value[0].characteristics.diet;
      document.body.appendChild(divnews3);

      let allDivs = document.getElementsByClassName("Info");

      // CSS DivNews
      for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.display = "inline";
        allDivs[i].style.backgroundColor = "#fce3ad";
        allDivs[i].style.padding = "5px";
        allDivs[i].style.fontSize = "18px";
        allDivs[i].style.border = "#f3ad6b 2px solid";
        allDivs[i].style.borderRadius = "10px";
        allDivs[i].style.position = "fixed";
        allDivs[i].style.zIndex = "100";
        allDivs[i].style.left = "-100px";
      }

      divnews.style.bottom = "100px";
      divnews2.style.bottom = "200px";
      divnews3.style.bottom = "300px";

      inactivityTime(allDivs);

    });
}
Newanimal();
