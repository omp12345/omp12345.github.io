
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("#nav-menu");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let resume1 = document
  .getElementById("resume-button-1")
  .addEventListener("click", NewTab);
let resume2 = document
  .getElementById("resume-button-2")
  .addEventListener("click", NewTab);

function NewTab() {
  window.open(
    "https://drive.google.com/file/d/1MGp-0Dvv9NddxDRSWh3uLxgUT3T_-Rff/view?usp=drive_link"
  );
}


let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);



  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .project-card, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "left" });

// *===============================  typed js==================================

const typed = new Typed(".multiple-text", {
  strings: [
    "Full Stack Web Developer",
    "Backend Developer with Node.js",
    "Problem Solver",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true,
});

let stats = document
  .getElementById("github-top-langs")
  .addEventListener("click", statsfun);

function statsfun() {
  window.open("https://github.com/omp12345", "_blank");
}

GitHubCalendar(".calendar", "omp12345");


GitHubCalendar(".calendar", "omp12345", { responsive: true });


GitHubCalendar(".calendar", "omp12345", {
  proxy(username) {
    return fetch(`https://your-proxy.com/github?user=${username}`);
  },
}).then((r) => r.text())







const elements = document.getElementsByClassName("home-content");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("mouseenter", () => {
    const text =
      "Hii Recruiter  I am Om Prakash Mishra I am web developer welcome to my portpholio website";
    speakTextWithIndianAccent(text, indianAccentVoiceName);
  });

  elements[i].addEventListener("mouseleave", () => {
    window.speechSynthesis.cancel();
  });
}

// if ("speechSynthesis" in window) {
  const resumeButton = document.getElementById("resume-button-1");
  const resumeButton1 = document.getElementById("resume-button-2");

function speakSkillName(skillName, x) {
  let message = undefined;
  if (x) {
    message = ` i rated myself in ${skillName} is ${x}`;
  } else if (skillName == "Thunder Client") {
    message = ` i rated myself in ${skillName} is ${8}`;
  } else if (skillName == "VSCode") {
    message = ` i rated myself in ${skillName} is ${10}`;
  } else if (skillName == "Bootstrap") {
    message = ` I am learning ${skillName}`;
  } else {
    message = ` thank You}`;
  }
  const speech = new SpeechSynthesisUtterance(message);
  speechSynthesis.speak(speech);
}

const skillButtons = document.querySelectorAll(".skills-card.tag-btn");

skillButtons.forEach((button, index) => {
  const arr = [7, 6.5, 8, 7, 7.5, 7, 6.5, 6, 7];
  button.addEventListener("mouseover", () => {
    const skillName = button.querySelector(".skills-card-name").textContent;
    speakSkillName(skillName, arr[index]);

    button.addEventListener("mouseout", () => {
      speechSynthesis.cancel();
    });
  });
});

// Function to speak a message
function speakMessage(message) {
  const speech = new SpeechSynthesisUtterance(message);
  speechSynthesis.speak(speech);
}


const targetElement = document.createElement('div');
targetElement.id = 'end-of-page-marker';
document.body.appendChild(targetElement);


const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.99, 
};


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      speakMessage("Thank You for visting, have a great time");
    }
  });
}, options);

observer.observe(targetElement);
