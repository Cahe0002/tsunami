const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

function toggleTheme() {
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);

// if (localStorage.getItem("theme") === "dark") {
//   html.classList.add("dark");
//   btn.classList.add("active");
//   btn.textContent = "Darkmode OFF";
// } else {
//   btn.textContent = "Darkmode ON";
// }

// function toggleTheme() {
//   html.classList.toggle("dark");
//   btn.classList.toggle("active");

//   if (html.classList.contains("dark")) {
//     localStorage.setItem("theme", "dark");
//     btn.textContent = "Darkmode OFF";
//   } else {
//     localStorage.setItem("theme", "light");
//     btn.textContent = "Darkmode ON";
//   }
// }
