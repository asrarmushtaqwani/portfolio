const toggle = document.getElementById("theme-toggle");
const body = document.body;

if(!localStorage.getItem("theme")) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.body.classList.add(prefersDark ? "dark" : "light");
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") body.classList.add("dark");
toggle.checked = savedTheme === "dark";

// Toggle handler
toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  const theme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  document.getElementById('progress-bar').style.width = scrolled + '%';
});

const typedText = "An undergrad curious about many things, with a particular passion for computers and coding.";
let i = 0;
function typeWriter() {
  if(i < typedText.length){
    document.getElementById("typed").innerHTML += typedText.charAt(i);
    i++;
    setTimeout(typeWriter, 35);
  }
}
window.addEventListener('load', typeWriter);
