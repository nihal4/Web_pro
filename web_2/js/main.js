var burger_line1 = document.querySelector('.navbar-burger-line1');
var burger_line2 = document.querySelector('.navbar-burger-line2');
var burger_line3 = document.querySelector('.navbar-burger-line3');

function make_cross(){
    burger_line1.classList.toggle('line1')
    burger_line2.classList.toggle('line2')
    burger_line3.classList.toggle('line3')
}