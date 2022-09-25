"use strict";

//
var clubsArray = [
  "adanaspor",
  "galatasaray",
  "fenerbahce",
  "besiktas",
  "clermont",
  "freiburg",
  "goztepe",
  "karabukspor",
  "karsiyaka",
  "lille",
  "mainz",
  "milan",
  "rennes",
  "shaktar",
  "strasbourg",
  "valencia",
];
let secretTeam = clubsArray[Math.floor(Math.random() * clubsArray.length)];
console.log(secretTeam);
let score = 20;
let highscore = 0;

document.getElementById("club-img").src = `logos/${secretTeam}.jpg`;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  // input boş olduğu zaman
  if (!guess) {
    displayMessage("Make a guess!");

    // doğru bilindiği zaman
  } else if (guess === secretTeam) {
    document.getElementById("club-img").src = "secretTeam";
    displayMessage("Congrats!");
    document.querySelector("body").style.backgroundColor = "#60b347";

    //highscore fonksiyonu
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").text = highscore;

      // yanlış bilindiği zaman
    } else if (guess !== secretTeam) {
      if (score > 1) {
        displayMessage("Wrong Answer!");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("Game over!");
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});
