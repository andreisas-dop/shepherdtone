var imgs = [];
var currentSlide = 0;
var prevSlide = 0;
var on = 1;


window.addEventListener("load", (e) => {
  imgs = document.querySelectorAll('.slider img');
  slider = document.querySelector('.slider');
  autoSlide();
  console.log(imgs);
});

window.addEventListener("keydown", (e) => {
  if (e.key === 'ArrowLeft') {
    navigate(-1);
    on = 0;
  } else if (e.key == 'ArrowRight') {
    navigate(1);
    on = 0;
  }
});

var autoSlide = (function() {
  if (on == 1) {
    navigate(1);
    setTimeout("autoSlide()", 2500);
  }
  else {
    return false;
  }
});

var navigate = (function(dir) {
  prevSlide = currentSlide;
  currentSlide = (currentSlide + dir) % imgs.length;
  if (currentSlide < 0) {
      currentSlide = imgs.length - 1;
  }
  imgs[currentSlide].classList.remove('hide');
  imgs[currentSlide].style.opacity = 1;
  imgs[prevSlide].classList.add('hide');
  imgs[prevSlide].style.opacity = 0;
});

