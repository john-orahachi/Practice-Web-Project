const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const darkMode = document.getElementById("darkMode").onclick(() =>{
  document.body.classList.toggle("dark-mode")
});

if(document.body.className === "dark-mode"){
  darkMode.textContent = "Light Mode";
}