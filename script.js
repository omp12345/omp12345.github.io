// *=============================== toggle icon navbar ==================================

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("#nav-menu");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// *=============================== github calender ==================================
// GitHubCalendar(".calendar", "omp12345");

// // or enable responsive functionality:
// GitHubCalendar(".calendar", "omp12345", { responsive: true });

// *=============================== resume opening in a new tab ==================================

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

// *=============================== scroll sections active link ==================================
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
  // *=============================== sticky navbar ==================================

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // *=============================== remove toggle icon and navbar when click navbar link(scroll) ==================================

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// *=============================== scroll reveal ==================================

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

// or enable responsive functionality:
GitHubCalendar(".calendar", "omp12345", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "omp12345", {
  proxy(username) {
    return fetch(`https://your-proxy.com/github?user=${username}`);
  },
}).then((r) => r.text());


function speakText(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}


const projectCards = document.getElementsByClassName("project-card");


for (let i = 0; i < projectCards.length; i++) {
  const projectCard = projectCards[i];
  const p1data = projectCard.querySelector(".p1").innerText;

  projectCard.addEventListener("mouseenter", () => {
    speakText(p1data);
  });

  projectCard.addEventListener("mouseleave", () => {
    window.speechSynthesis.cancel(); 
  });
}

function speakTextWithIndianAccent(text, voiceName) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);

  const voices = synth.getVoices();
  const indianVoice = voices.find((voice) => voice.lang === voiceName);

  if (indianVoice) {
    utterance.voice = indianVoice;
  }

  synth.speak(utterance);
}

const indianAccentVoiceName = "hindi"; 


const elements = document.getElementsByClassName("home-content");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("mouseenter", () => {
    const text =
      "Hii Recruiter  I am Om Prakash Mishra I am web developer this is my portpholio You can Check it and contact me to join our Team My email is opsgp1999@gmail.com";
    speakTextWithIndianAccent(text, indianAccentVoiceName);
  });

  elements[i].addEventListener("mouseleave", () => {
    window.speechSynthesis.cancel();
  });
}
// Check if the SpeechSynthesis API is supported by the browser
if ('speechSynthesis' in window) {
  // Get the resume button element
  const resumeButton = document.getElementById('resume-button-1');
  const resumeButton1 = document.getElementById('resume-button-2');

  // Create a function to speak the text when the button is hovered
  function speakText(text) {
   
   
    const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
  }

  // Add a mouseover event listener to the button
  resumeButton.addEventListener('mouseover', ()=>{
    speakText("Hey recruter plese download resume")
  });
  resumeButton.addEventListener("mouseleave", () => {
    window.speechSynthesis.cancel();
  });
  resumeButton1.addEventListener('mouseover', ()=>{
    speakText("click to download resume")
  });
}
// Function to speak a message

// Function to speak the name of a skill
function speakSkillName(skillName,x) {
 let message=undefined
  if(x){
     message = ` i rated myself in ${skillName} is ${x}`;
  }else if(skillName=="Thunder Client"){
    message=` i rated myself in ${skillName} is ${8}`
  }
  else if(skillName=="VSCode"){
    message=` i rated myself in ${skillName} is ${10}`
  }
  else if(skillName=="Bootstrap"){
    message=` I am learning ${skillName}`
  }else{
    message=` thank You}`
  }
  const speech = new SpeechSynthesisUtterance(message);
  speechSynthesis.speak(speech);
}

// Get all the skills-card elements
const skillButtons = document.querySelectorAll('.skills-card.tag-btn');

// Add a mouseover event listener to each skills-card button
skillButtons.forEach((button,index) => {
  const arr=[7,6.5,8,7,7.5,7,6.5,6,7]
  button.addEventListener('mouseover', () => {
   
    const skillName = button.querySelector('.skills-card-name').textContent;
    speakSkillName(skillName,arr[index])

    // Add a mouseout event listener to remove the voice when hovering stops
    button.addEventListener('mouseout', () => {
      speechSynthesis.cancel(); // Stop the speech when mouseout event is triggered
    });
  });
});

// Function to check if the user has reached the end of the page

