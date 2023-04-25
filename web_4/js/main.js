document.querySelector("body").addEventListener("mousemove", eyeball);
function eyeball() {
  const eye = document.querySelectorAll(".eyes");
  eye.forEach(function (eye) {
    let x = eye.getBoundingClientRect().left + (eye.clientWidth / 2);
    let y = eye.getBoundingClientRect().top + (eye.clientHeight / 2);
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = (radian * (180 / Math.PI) * -1) + 90;
    eye.style.transform = "rotate(" + rotate + "deg)";
  });
}




//
var cover = document.querySelector('.cover')
var pass = document.querySelector('.pass')

pass.addEventListener('input',hide)

function hide(x){
    if(x == 'show'){
        null
    }else{
        cover.classList.add('hide')
    }
    
}


function show(){
    if(pass.type == 'password'){
        pass.type = 'text'
    }else{
        pass.type = 'password'
    }
    cover.classList.toggle('show');
    hide('show')
}