const img = anime({
    targets: '.photo',
    // duration: 1500,
    // translateX: [0, 40], // from 100 to 250
    // delay: 500,
    // direction: 'alternate',
    // loop: true
    translateX: 30,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
    autoplay: false
    
  });

  function loop(t) {
    img.tick(t);
    customRAF = requestAnimationFrame(loop);
  }
  
  requestAnimationFrame(loop);
  

//   document.querySelector('.about-me').onclick = img.restart;
