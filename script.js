
//desplegable de la barra de config

let btnImage = document.getElementById("btn-image");
let barra = document.getElementById("config");

function toggleBar() {
  if (barra.style.display === "none") {
    barra.style.display = "block";
  } else {
    barra.style.display = "none";
  }
}

btnImage.addEventListener("click", toggleBar);

document.addEventListener("click", function(event) {
  if (event.target !== barra && event.target !== btnImage) {
    barra.style.display = "none";
  }
});


//desplegable de la barra de navegación

// let btnTurnos = document.getElementById("btn-mobile");

// function toggleBar() {
//   var barra1 = document.getElementById("mobile-menu");
//   if (barra1.style.display === "none") {
//     barra1.style.display = "block";
//   } else {
//     barra1.style.display = "none";
//   }
// }

// btnTurnos.addEventListener("click", toggleBar);

//sonido campana

var link = document.getElementById('bell');
var audio = document.getElementById('myAudio');
var isPlaying = false;

link.addEventListener('click', function(e) {
  e.preventDefault();
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
});

