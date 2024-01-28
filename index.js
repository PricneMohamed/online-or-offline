let online = document.querySelector(".online");
let moon = document.querySelector(".moon");
let btn = document.querySelector(".reload");
let sun = document.querySelector(".sun");
let yap = "online".toUpperCase();
let no = "offline".toUpperCase();
let h1 = document.createElement("h1");
h1.innerHTML = "Start";

h1.classList.add("text-[40px]","font-bold")
document.body.append(h1);
h1.style.color = "white";
function check() {
  if (navigator.onLine) {
    h1.innerHTML = yap;
    document.title = yap;
    online.classList.remove("bg-red-600");
    online.classList.add("bg-lime-500");
  } else {
    document.title = no;
    h1.innerHTML = no;
    online.classList.add("bg-red-600");
    online.classList.remove("bg-lime-500");
  }
}
check();
btn.onclick = function () {
  window.location.reload();
};
sun.addEventListener("click", () => {
  document.body.style.backgroundColor = "#fff";
  h1.style.color = "#000";
  moon.style.display = "block";
  moon.style.color = "#000";
  sun.style.display = "none";
  btn.style.backgroundColor = "#000";
  btn.style.color = "#fff";
});
moon.addEventListener("click", () => {
  document.body.style.backgroundColor = "#000";
  h1.style.color = "#fff";
  sun.style.display = "block";
  sun.style.color = "#fff";
  moon.style.display = "none";
  btn.style.backgroundColor = "#fff";
  btn.style.color = "#000";
});
