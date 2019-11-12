//SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

let menu = document.getElementById("navLinks");

document.querySelectorAll(".link-icon-one, .link-icon").forEach(element => {
    element.addEventListener('click',(e)=>{
        e.preventDefault();
        menu.classList.toggle("menuOpen");
})
})

const mostrarMenu = () => {
    menu.classList.toggle("menuOpen");
}

document.getElementById("hamburger").addEventListener("click", mostrarMenu);

const sliderPokedex = document.getElementById('slider-pokedex');
const sliderLabcar = document.getElementById('slider-labcar');
const sliderMdLinks = document.getElementById('slider-mdLinks');

document.querySelectorAll('a[href^="#slider-pokedex"]').forEach(element=>{
    element.addEventListener("click",(e)=>{
        e.preventDefault();
        sliderPokedex.style.display = "block";
        sliderMdLinks.style.display = "none";
        sliderLabcar.style.display = "none";
    });
});
document.querySelectorAll('a[href^="#slider-mdLinks"]').forEach(element=>{
    element.addEventListener("click",(e)=>{
        e.preventDefault();
        sliderMdLinks.style.display = "block";
        sliderLabcar.style.display = "none";
        sliderPokedex.style.display = "none";
    });
});
document.querySelectorAll('a[href^="#slider-labcar"]').forEach(element=>{
    element.addEventListener("click",(e)=>{
        e.preventDefault();
        sliderLabcar.style.display = "block";
        sliderPokedex.style.display = "none";
        sliderMdLinks.style.display = "none";
    });
});

