

let main = document.querySelector('#menu-icon');
let Navbar = document.querySelector('#nav-menu')

menuIcon.onclick = () => {
  main.classList.toggle('bx-x');
  Navbar.classList.toggle('active')
};



    let resume1 = document.getElementById("resume-button-1").addEventListener("click", callnewtab)
    let resume2 = document.getElementById("resume-button-2").addEventListener("click", callnewtab)

    function callnewtab() {
      window.open(
        "https://drive.google.com/file/d/1MGp-0Dvv9NddxDRSWh3uLxgUT3T_-Rff/view?usp=sharing"
      );
    }

let Sections = document.querySelectorAll('section');
let Navlink = document.querySelectorAll('header nav a')

window.onscroll = () => {
  Sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        Navlink.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        });
    };

  });
  
   
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);


menuIcon.classList.remove('bx-x');
Navbar.classList.remove('active')

};



ScrollReveal({
 
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .skills-container, .project-card, .contact form', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin:'left'});


const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Web Developer', 'Backend Developer with Node.js', 'Problem Solver'],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true
})


let stats = document.getElementById("github-top-langs").addEventListener("click", statsfun)

function statsfun(){
  window.open(
    "https://github.com/omp12345",
    "_blank"
  );
}

GitHubCalendar(".react-activity-calendar", "omp12345", {
  responsive: true,
  global_stats: false,
  tooltips: true,
});








