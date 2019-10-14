//ANIME
const img = anime({
    targets: '.photo',
    translateX: 30,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
    autoplay: false,
    duration: 3000
    
  });

  function loop(t) {
    img.tick(t);
    customRAF = requestAnimationFrame(loop);
  }
  
  requestAnimationFrame(loop);


//SCROLL REVEAL

window.sr = ScrollReveal();
sr.reveal('#navbar',{
  duration:3000,
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