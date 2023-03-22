const light = document.querySelector(".light");
const menu = document.querySelectorAll("#lines");
//
// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
    light.classList.remove("white");
    menu[0].classList.remove("white");
    menu[1].classList.remove("white");
    menu[2].classList.remove("white");
    document.querySelector(".link").classList.remove("white");
  } else {
    setTheme("theme-dark");
    document.querySelector(".link").classList.add("white");
    light.classList.add("white");
    menu[0].classList.add("white");
    menu[1].classList.add("white");
    menu[2].classList.add("white");
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    light.classList.add("white");
    document.querySelector(".link").classList.add("white");
    menu[0].classList.add("white");
    menu[1].classList.add("white");
    menu[2].classList.add("white");
  } else {
    setTheme("theme-light");
    document.querySelector(".link").classList.remove("white");
    light.classList.remove("white");
    menu[0].classList.remove("white");
    menu[1].classList.remove("white");
    menu[2].classList.remove("white");
  }
})();

//auto type

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
  "Hi my name is Nihal..",
  "I am a passionate front-end web developer",
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

//new fade in & fade away
function fade(fade_name, fade_name2) {
  localStorage.setItem("fade", fade_name);
  localStorage.setItem("fade2", fade_name2);
  document.querySelector(".hero").classList.add(fade_name);
  document.querySelector(".s1").classList.add(fade_name2);
}

function example() {
  if (
    localStorage.getItem("fade") === "fade_away" &&
    localStorage.getItem("fade2") == "fade_in"
  ) {
    fade("fade_in", "fade_away");
    document.querySelector(".hero").classList.remove("fade_away");
  } else {
    fade("fade_away", "fade_in");

    document.querySelector(".s1").classList.remove("fade_away");
  }
}
(function () {
  if (
    localStorage.getItem("fade") === "fade_away" &&
    localStorage.getItem("fade2") == "fade_in"
  ) {
    fade("fade_away", "fade_in");
  } else {
    fade("fade_in", "fade_away");
  }
})();

//noclick

var box2 = document.querySelector(".profile-box2");
var box1 = document.querySelector(".profile-box1");
function show() {
  menu[0].classList.toggle("rotate1");
  menu[1].classList.toggle("rotate3");
  menu[2].classList.toggle("rotate2");
}
//
var proName = document.querySelector(".profile-name");

names = ["Sir potato the third", "potato boiii", "nihal ahmed"];

textSequense(0);
function textSequense(i) {
  if (names.length > i) {
    setTimeout(function () {
      proName.innerHTML = names[i];
      textSequense(++i);
    }, 3000);
  } else if (names.length == i) {
    textSequense(0);
  }
}

//function float()
var link = document.querySelector(".link");
var logoIcon = document.querySelector(".devicon-github-original");
var links = [
  "https://www.facebook.com/vrubivrom/",
  "https://www.google.com/",
  "https://github.com/nihal4",
];
var logos = [
  "fab fa-facebook-f",
  "fab fa-instagram",
  "devicon-github-original",
];
logo(0);
function logo(i) {
  if (links.length > i) {
    setTimeout(function () {
      link.href = links[i];
      logoIcon.className = logos[i];
      logo(++i);
    }, 5000);
  } else if (links.length == i) {
    logo(0);
  }
}

//new slide apper
var child = document.querySelector('.profile-skills-box');
allNodes = child.childNodes;
console.log(allNodes)
var arr1 = ['devicon-javascript-plain','devicon-python-plain-wordmark','devicon-cplusplus-plain']
var arr2 = ['devicon-sass-original','devicon-c-plain','devicon-blender-original']
slider(0)
function slider(i){
  if(arr1.length>i && arr2.length>i){
    setTheme(function(){
      allNodes[1].className =arr1[i]
      allNodes[3].className =arr2[i]
      slider(++i)
    },300)
  }else if(arr1.length == i && arr2.length == i){
    slider(0)
  }
}



//devicon-javascript-plain
//devicon-sass-original
//devicon-python-plain-wordmark
//devicon-c-plain
//devicon-cplusplus-plain
//devicon-blender-original
