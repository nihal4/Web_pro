function fade(fade_name){
    localStorage.setItem('fade',fade_name)
    document.querySelector('.hero').classList.add(fade_name);
}

function example(){
    if(localStorage.getItem("fade")==='fade_away'){
        fade('fade_in');
        document.querySelector('.s1').classList.remove('hide')
    }else{
        fade('fade_away');
        document.querySelector('.s1').classList.add('hide')
    }
}
(function () {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-dark");
      light.classList.add("white");
    } else {
      setTheme("theme-light");
      light.classList.remove("white");
    }
  })();