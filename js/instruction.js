// console.log("Test");

// document.querySelector("#mund").addEventListener("click", mundb);

// function mundb() {
//   console.log("test 2");
//   document.querySelector("#mund").classList.add("changecolor");
//   document.querySelector("#mund").style.backgroundColor
// }

// console.log("Test");

// document.querySelector("#mund").addEventListener("click", pupilb);

// function pupilb() {
//   console.log("test 2");
//   document.querySelector("#pupil").classList.add("changecolor");
//   document.querySelector("#pupil").style.transform = "rotate(2deg)";
// }

// Mund knappen \\

console.log("Test1");

document.querySelector("#mund").addEventListener("click", sundb);

function sundb() {
  console.log("test 1");
  document.querySelector("#sund").classList.toggle("visible");

  document.querySelector(".info-text h2").textContent = "Sundhed";
  document.querySelector(".info-text p").textContent =
    "Balancér vægt, energi og smidighed";
}

// document.querySelector(".info-text").innerHTML = "hej";

// function textbox() {
//   document.querySelector(".info-text").classList.toggle("visible");
// }

// Mave knappen \\

console.log("Test2");
document.querySelector("#mave").addEventListener("click", maveb);

function maveb() {
  console.log("test 2");
  document.querySelector("#tsunami").classList.toggle("visible");

  document.querySelector(".info-text h2").textContent = "Tsunami";
  document.querySelector(".info-text p").textContent =
    "Strategisk brug af flodhestens styrke for at stoppe bølgen.";
}

// Ben knappen \\

console.log("Test3");

document.querySelector("#ben").addEventListener("click", vaegtb);

function vaegtb() {
  console.log("test 3");
  document.querySelector("#vaegt").classList.toggle("visible");

  document.querySelector(".info-text h2").textContent = "Vægt";
  document.querySelector(".info-text p").textContent =
    "Byg styrke og muskelmasse hurtigt, så flodhesten kan modstå tsunamien.";
}

// document.querySelector("#mund").addEventListener("click", sundb);

// function sundb() {
//   console.log("removesund");
//   document.querySelector("#sund").classList;
//   document.querySelector("#sund").classList.add("remove");
// }

// function sundb() {
//   console.log("removesund");
//   document.querySelector("#sund").classList;
//   document.querySelector("#sund").classList.remove("remove");
// }

// console.log("eye");
// document.querySelector("#mund").addEventListener("click", rotate);
// function rotate() {
//   document.querySelector("#pupil").classList.add("rotate");
//   document
//     .querySelector("#pupil")
//     .addEventListener("animationend", removeRotate);
// }

// function removeRotate() {
//   document.querySelector("#pupil").classList.remove("rotate");
// }
