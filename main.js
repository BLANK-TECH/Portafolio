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
