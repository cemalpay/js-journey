//     //
// DOM //
//     //

// 'modal' isimli class'ı modal isimli variable'a tanımladık.
const modal = document.querySelector(".modal");

//'modal' class'ının bağlı olduğu classList'den -hidden class'ını kaldırdık.
modal.classList.remove("hidden");

//'modal' class'ının bağlı olduğu classList'den -hidden class'ını ekledik.
modal.classList.add("hidden");

//.addEventListener//
//KEYBOARD EVENT SAMPLE//
// 'Escape' tuşuna (esc) basıldığında ve && eğer modal classı hidden style'ına sahipse closeModal fonksiyonunu execute ettirdik.
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//.textContent//
document.querySelector(".highscore").textContent = highscore;

//getElementById//
//id'si club-img olan bir fotoğrafın source'unu değiştirdik.
document.getElementById("club-img").src = `logos/${secretTeam}.jpg`;

//body'nin background-color'ını değiştirdik.
document.querySelector("body").style.backgroundColor = "#60b347";

//Array içerisinden random seçim yaptırma//
let secretTeam = clubsArray[Math.floor(Math.random() * clubsArray.length)];
console.log(secretTeam);
