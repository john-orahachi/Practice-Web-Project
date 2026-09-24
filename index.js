const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
const bodyElement = document.getElementById("body-element");
const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
  if(bodyElement.classList.contains("dark-mode")){
    darkMode.textContent = "Light Mode";
    darkMode.style.backgroundColor = "white";
    darkMode.style.color = "black";
    bodyElement.style.color = "black";
    document.div.style.backgroundColor = "black";
  }
  else {
    darkMode.textContent = "Dark Mode";
    darkMode.style.backgroundColor = "black";
    darkMode.style.color = "white";
  }
});