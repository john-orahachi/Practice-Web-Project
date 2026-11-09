const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const headerElement = document.getElementById('header-element');
const footerElement = document.getElementById('footer-element');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const contactUs = document.getElementById("contact-us");
const logoContainer = document.getElementById("logoContainer");
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
const bodyElement = document.getElementById("body-element");
const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
   headerElement.classList.toggle("dark");
   footerElement.classList.toggle("dark");
   section1.classList.toggle("dark");
   section2.classList.toggle("dark");
   contactUs.classList.toggle("darker");
   logoContainer.classList.toggle('dark')

  if(bodyElement.classList.contains("dark-mode")){
    darkMode.textContent = "Light Mode";
    darkMode.style.backgroundColor = "white";
    darkMode.style.color = "black";
    bodyElement.style.color = "black";
    

  }
  else {
    darkMode.textContent = "Dark Mode";
    darkMode.style.backgroundColor = "black";
    darkMode.style.color = "white";
  }
});