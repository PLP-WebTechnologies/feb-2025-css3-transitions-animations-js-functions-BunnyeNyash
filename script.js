/* Function to toggle theme and store preference in localStorage */
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

/* Function to load theme from localStorage */
function loadTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
    }
}

/* Function to save username to localStorage and update welcome text */
function saveUsername(event) {
    event.preventDefault();
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value.trim();
    const welcomeText = document.getElementById("welcome-text");

    if (username) {
        localStorage.setItem("username", username);
        welcomeText.textContent = `Welcome, ${username}! Try the buttons below.`;
        usernameInput.value = "";
    } else {
        welcomeText.textContent = "Please enter a valid name.";
    }
}

/* Function to load username from localStorage */
function loadUsername() {
    const username = localStorage.getItem("username");
    if (username) {
        document.getElementById("welcome-text").textContent = `Welcome, ${username}! Try the buttons below.`;
    }
}

/* Function to open modal with animation */
function openModal() {
    document.getElementById("modal").classList.add("show");
}

/* Function to close modal */
function closeModal() {
    document.getElementById("modal").classList.remove("show");
}

/* Event Listeners */
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);
document.getElementById("open-modal").addEventListener("click", openModal);
document.getElementById("close-modal").addEventListener("click", closeModal);
document.getElementById("username-form").addEventListener("submit", saveUsername);

/* Load theme and username on page load */
document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
    loadUsername();
});
