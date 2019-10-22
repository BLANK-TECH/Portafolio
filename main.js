//ANIME
const img = anime({
    targets: '#arrow',
    translateY: 6,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
    autoplay: false,
    duration: 2000
    
  });

  function loop(t) {
    img.tick(t);
    customRAF = requestAnimationFrame(loop);
  }
  
  requestAnimationFrame(loop);


//SCROLL REVEAL

window.sr = ScrollReveal();
sr.reveal('#navbar',{
  duration:2000,
  origin:'bootom'
});

//SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

var path = anime.path('#path');

var motionPath = anime({
  targets: '.el',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 3000,
  loop: true
});
