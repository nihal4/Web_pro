var burger_line1 = document.querySelector('.navbar-burger-line1');
var burger_line2 = document.querySelector('.navbar-burger-line2');
var burger_line3 = document.querySelector('.navbar-burger-line3');
var navbar_list = document.querySelector('.navbar-list')
var navbar_part2 = document.querySelector('.navbar-part2')
var navabr = document.querySelector('.navbar');
function make_cross(){
    navabr.classList.toggle('add_100')
    navbar_part2.classList.toggle('add_dis')
    burger_line1.classList.toggle('line1')
    burger_line2.classList.toggle('line2')
    burger_line3.classList.toggle('line3')
    navbar_list.classList.toggle('toggle')

}



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

//loading screen 
function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.header', true);
    setVisible('#loading', false);
  });

