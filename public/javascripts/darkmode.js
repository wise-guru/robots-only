const toggleBtn = document.querySelector(".theme");
const theme = document.body;
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  theme.classList.add("dark");
  toggleBtn.classList.remove("dark-mode-toggle");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  theme.classList.remove("dark");
  toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
