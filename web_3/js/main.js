const light = document.querySelector(".light");
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
  } else {
    setTheme("theme-dark");
    light.classList.add("white");
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    light.classList.add("white");
  } else {
    setTheme("theme-light");
    light.classList.remove("white");
  }
})();

//auto type

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Hi my name is Nihal..","I am a passionate front-end web developer"];
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
function fade(fade_name,fade_name2){
  localStorage.setItem('fade',fade_name)
  localStorage.setItem('fade2',fade_name2)
  document.querySelector('.hero').classList.add(fade_name);
  document.querySelector('.s1').classList.add(fade_name2)
}

function example(){
  if(localStorage.getItem("fade") === 'fade_away' && localStorage.getItem('fade2')=='fade_in'){
      fade('fade_in','fade_away');
      document.querySelector('.hero').classList.remove('fade_away');
  }else{
    fade('fade_away','fade_in')
    
    document.querySelector('.s1').classList.remove('fade_away');
  }
}
(function(){
  if(localStorage.getItem('fade')==='fade_away' && localStorage.getItem('fade2')=='fade_in'){
    fade('fade_away','fade_in')
  }else{
    fade('fade_in','fade_away')
  }
})();

//noclick

var box2 = document.querySelector('.profile-box2');
var box1 = document.querySelector('.profile-box1');
function show(){
  box2.classList.toggle('show');
  document.querySelector('.btn-a') = "close";
}