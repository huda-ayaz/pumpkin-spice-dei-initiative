const boxes = document.querySelectorAll(".box");
const heading = document.querySelector(".heading span");
const btn = document.querySelector(".btn");
const btn__link = document.getElementById("btn__link");

const colorsText = [
  "#fd8473",
  "#e59999",
  "#a5531c",
  "#b52e31",
  "#efada7",
  "#cf649a",
  "#8c5d53"
];

const colorsBtn = [
  "#ffefd5",
  "#e59999",
  "#a5531c",
  "#b52e31",
  "#efada7",
  "#cf649a",
  "#8c5d53"
];

const techs = ["Click a box to learn more.", "Learn more about what we're doing for DEI.", "Learn more about what we're doing for DIVERSITY", "Learn more about what we're doing for EQUITY", "Learn more about what we're doing for INCLUSION", "Learn more about what we're doing for Employee Resourse Groups (ERGs)", "Learn more about what we're doing for MENTORSHIP"];
const techsBtn = ["", "DEI", "Diversity", "Equity", "Inclusion", "ERGs", "Mentorship"];
const techsBtnLink = ["#", "#learn__DEI", "#second", "#third", "#last", "erg.html", "dashboard.html"]; //dictionary

let current = 1;

const textStyle = () => {
  heading.style.color = colorsText[current - 1];
  heading.textContent = techs[current - 1];
  btn.style.backgroundColor = colorsBtn[current - 1];
  btn.firstElementChild.textContent = techsBtn[current - 1];
  btn__link.href = techsBtnLink[current - 1];
};

let interval = setInterval(() => {
  boxes.forEach((box) => {
    if (current > boxes.length) current = 1;

    if (box.classList[1].split("-")[1] * 1 === current) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
  textStyle();
  current++;
}, 5000);

boxes.forEach((box) => {
  box.addEventListener("click", ()=> {

    boxes.forEach((cube) => {
      cube.classList.remove("active");
    });
    box.classList.add("active");

    current = box.classList[1].split("-")[1] * 1;

    textStyle();

    clearInterval(interval);
  });
});