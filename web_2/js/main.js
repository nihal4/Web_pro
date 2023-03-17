var burger_line1 = document.querySelector('.navbar-burger-line1');
var burger_line2 = document.querySelector('.navbar-burger-line2');
var burger_line3 = document.querySelector('.navbar-burger-line3');
var navbar_list = document.querySelector('.navbar-list')
function make_cross(){
    burger_line1.classList.toggle('line1')
    burger_line2.classList.toggle('line2')
    burger_line3.classList.toggle('line3')
    navbar_list.classList.toggle('toggle')
}

var navabr = document.querySelector('.navbar');

window.onscroll = function(){
    if(document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200){
        navabr.classList.add('change-color');
        navabr.classList.remove('color-trans');
    }
    else{
        navabr.classList.add('color-trans');
        navabr.classList.remove('change-color');
    }
}

