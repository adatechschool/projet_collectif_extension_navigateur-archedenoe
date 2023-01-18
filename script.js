// Recuperer l'id
let ExtensionId = chrome.runtime.id;

function changeimage(animal) {
  fetch(`https://api.unsplash.com/search/photos?query=${animal}&client_id=KlNUpmhuFzyX_hVlLRCmrNJw6zfCaGuLczhVSW-6lY4`)
    .then(res => res.json())
    .then(data => {
      let images = document.getElementsByTagName("img");
      let randomIndex = Math.floor(Math.random() * data.results.length);
      for (let i = 0; i < images.length; i++) {
        images[i].src = data.results[randomIndex].urls.small;
        randomIndex++;
        if (randomIndex > 9){
          randomIndex = 0;
        }
      }
    })
    .catch(err => console.log(err));
}

// Creation d'une div pour les boutons
const divButtons = document.createElement("div");
divButtons.className = "div-buttons";
divButtons.style.cssText = `
  background-color: black;
  position: fixed;
  z-index: 100;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  border: 3px solid white;
  border-radius: 20px;
`;
document.body.appendChild(divButtons);


// changer la couleur des boutons
function changeButton(btn) {
  if (btn.style.backgroundColor == "black") {
    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].style.backgroundColor = "black";
    }
    btn.style.backgroundColor = "#99ff99";
  } else {
    btn.style.backgroundColor = "black";
  }
}


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

//Création des divs infos pour l'API2 (news)
let divnews = document.createElement("div");
divnews.className = "Info left";
document.body.appendChild(divnews);

let divnews2 = document.createElement("div");
divnews2.className = "Info left";
document.body.appendChild(divnews2);

let divnews3 = document.createElement("div");
divnews3.className = "Info left";
document.body.appendChild(divnews3);

//Création des divs infos pour vautour (news)
let divnews4 = document.createElement("div");
divnews4.className = "Info left";
document.body.appendChild(divnews4);

let divnews5 = document.createElement("div");
divnews5.className = "Info left";
document.body.appendChild(divnews5);

let divnews6 = document.createElement("div");
divnews6.className = "Info left";
document.body.appendChild(divnews6);

//Création des divs infos pour coccinelle (news)
let divnews7 = document.createElement("div");
divnews7.className = "Info right";
document.body.appendChild(divnews7);

let divnews8 = document.createElement("div");
divnews8.className = "Info right";
document.body.appendChild(divnews8);

let divnews9 = document.createElement("div");
divnews9.className = "Info right";
document.body.appendChild(divnews9);

//Création des divs infos pour lynx (news)
let divnews10 = document.createElement("div");
divnews10.className = "Info right";
document.body.appendChild(divnews10);

let divnews11 = document.createElement("div");
divnews11.className = "Info right";
document.body.appendChild(divnews11);

let divnews12 = document.createElement("div");
divnews12.className = "Info right";
document.body.appendChild(divnews12);

let allDivs = document.getElementsByClassName("Info left");
let allDivs2 = document.getElementsByClassName("Info right");


// CSS allDivs
for (let i = 0; i < allDivs.length; i++) {
  allDivs[i].style.display = "inline";
  allDivs[i].style.backgroundColor = "#fce3ad";
  allDivs[i].style.padding = "5px";
  allDivs[i].style.fontSize = "18px";
  allDivs[i].style.border = "#f3ad6b 2px solid";
  allDivs[i].style.borderRadius = "10px";
  allDivs[i].style.position = "fixed";
  allDivs[i].style.zIndex = "100";
  allDivs[i].style.left = "-330px";
  allDivs[i].style.maxWidth = "300px";
}

// CSS allDivs2
for (let i = 0; i < allDivs2.length; i++) {
  allDivs2[i].style.display = "inline";
  allDivs2[i].style.backgroundColor = "#fce3ad";
  allDivs2[i].style.padding = "5px";
  allDivs2[i].style.fontSize = "18px";
  allDivs2[i].style.border = "#f3ad6b 2px solid";
  allDivs2[i].style.borderRadius = "10px";
  allDivs2[i].style.position = "fixed";
  allDivs2[i].style.zIndex = "100";
  allDivs2[i].style.right = "-330px";
  allDivs2[i].style.maxWidth = "300px";
}

divnews.style.bottom = "100px";
divnews2.style.bottom = "200px";
divnews3.style.bottom = "300px";

divnews4.style.bottom = "400px";
divnews5.style.bottom = "500px";
divnews6.style.bottom = "600px";

divnews7.style.bottom = "100px";
divnews8.style.bottom = "200px";
divnews9.style.bottom = "300px";

divnews10.style.bottom = "400px";
divnews11.style.bottom = "500px";
divnews12.style.bottom = "600px";

// Fonction API2 (news) pour fetch les infos et remplir les divs seahorse
function seahorseFact() {
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
      // Mettre les infos dans les divs
      divnews.innerHTML =
        "Seahorse = Distinctive feature : " + value[0].characteristics.distinctive_feature;

      divnews2.innerHTML =
        "Seahorse = Favorite food : " + value[0].characteristics.favorite_food;

      divnews3.innerHTML =
        "Seahorse = Fun fact : " + value[0].characteristics.slogan;
    });
}
seahorseFact();

// Fonction API2 (news) pour fetch les infos et remplir les divs vautour
function vultureFact() {
  let nom = "vulture";

  fetch("https://api.api-ninjas.com/v1/animals?name=" + nom, {
    headers: { "X-Api-Key": "A8Se3TXGr1J+WsnbVJEwSw==GikJKEs7eqMvdvLx" },
  })
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      // Mettre les infos dans les divs
      divnews4.innerHTML =
        "Vulture = Main prey : " + value[6].characteristics.main_prey;

      divnews5.innerHTML =
        "Vulture = Lifestyle : " + value[6].characteristics.lifestyle;

      divnews6.innerHTML =
        "Vulture = Fun fact : " + value[6].characteristics.slogan;
    });
}
vultureFact();


// Fonction API2 (news) pour fetch les infos et remplir les divs coccinelle
function ladybugFact() {
  let nom = "ladybug";

  fetch("https://api.api-ninjas.com/v1/animals?name=" + nom, {
    headers: { "X-Api-Key": "A8Se3TXGr1J+WsnbVJEwSw==GikJKEs7eqMvdvLx" },
  })
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      // Mettre les infos dans les divs
      divnews7.innerHTML =
        "Ladybug = Biggest threat : " + value[0].characteristics.biggest_threat;

      divnews8.innerHTML =
        "Ladybug = Age of sexual maturity : " + value[0].characteristics.age_of_sexual_maturity;

      divnews9.innerHTML =
        "Ladybug = Number of species : " + value[0].characteristics.number_of_species;
    });
}
ladybugFact();

// Fonction API2 (news) pour fetch les infos et remplir les divs lynx
function lynxFact() {
  let nom = "lynx";

  fetch("https://api.api-ninjas.com/v1/animals?name=" + nom, {
    headers: { "X-Api-Key": "A8Se3TXGr1J+WsnbVJEwSw==GikJKEs7eqMvdvLx" },
  })
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function (value) {
      // Mettre les infos dans les divs
      divnews10.innerHTML =
        "Lynx = Habitat : " + value[3].characteristics.habitat;

      divnews11.innerHTML =
        "Lynx = Lifespan : " + value[3].characteristics.lifespan;

      divnews12.innerHTML =
        "Lynx = Fun fact : " + value[3].characteristics.slogan;
    });
}
lynxFact();

//déplacement div gauches
let statut = 0;

function arrivingFromLeft(allDivs) {
  for (let k = 0; k < allDivs.length; k++) {
    var pos = -330;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 310) {
        clearInterval(id);
      } else {
        pos++;
        allDivs[k].style.left = pos + "px";
      }
    }
  }
  statut = 1;
}

function leavingToLeft(allDivs) {
  for (let k = 0; k < allDivs.length; k++) {
    var pos = 310;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == -330) {
        clearInterval(id);
      } else {
        pos--;
        allDivs[k].style.left = pos + "px";
      }
    }
  }
  statut = 0;
}

//déplacement div droites
function arrivingFromRight(allDivs2) {
  for (let k = 0; k < allDivs2.length; k++) {
    var pos = -330;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 310) {
        clearInterval(id);
      } else {
        pos++;
        allDivs2[k].style.right = pos + "px";
      }
    }
  }
  statut = 1;
}

function leavingToRight(allDivs2) {
  for (let k = 0; k < allDivs2.length; k++) {
    var pos = 310;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == -330) {
        clearInterval(id);
      } else {
        pos--;
        allDivs2[k].style.right = pos + "px";
      }
    }
  }
  statut = 0;
}

// // Création de la fonction AFK puis appel
let inactivityTime = function (allDivs, allDivs2) {
  window.onload = deplacements;
  // document.onmousemove = deplacements;
  document.onkeypress = deplacements;
  function deplacements() {
    if (statut == 0) {
      setTimeout(function () {
        arrivingFromLeft(allDivs);
        arrivingFromRight(allDivs2);
      }, 20000);
    } else {
      leavingToLeft(allDivs);
      leavingToRight(allDivs2);
    }
  }
  setTimeout(() => {
    inactivityTime(allDivs, allDivs2);
  }, 10000);
};

inactivityTime(allDivs, allDivs2);
