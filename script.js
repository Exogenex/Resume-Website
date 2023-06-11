/* Smooth scrolling with sticky header */

// Add smooth scrolling behavior to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		// Get the target section based on the href attribute of the clicked link
		const target = document.querySelector(this.getAttribute('href'));

		// Get the height of the header
		const headerHeight = document.querySelector('header').offsetHeight;

		// Calculate the offset to scroll to, taking into account the header height
		const offset = target.offsetTop - headerHeight;

		// Scroll to the target section with smooth behavior
		window.scrollTo({
			top: offset,
			behavior: 'smooth'
		});
	});
});

/* Dark Mode Toggle */

// Check user's preferred color scheme and set initial toggle state
// Check if a theme preference is stored in local storage
const currentTheme = localStorage.getItem("theme");

// If a theme preference exists, apply it
if (currentTheme) {
	document.documentElement.setAttribute("data-theme", currentTheme);

	// Update the switch state based on the stored theme
	if (currentTheme === "light") {
		document.getElementById("dark-mode-toggle").checked = false;
	} else if (currentTheme === "dark") {
		document.getElementById("dark-mode-toggle").checked = true;
	}
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	document.getElementById("dark-mode-toggle").checked = true;
}

// Listen for toggle change
document.getElementById("dark-mode-toggle").addEventListener("change", function () {
	if (this.checked) {
		// Enable dark mode
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
		updateColors("dark");
	} else {
		// Disable dark mode
		document.documentElement.removeAttribute("data-theme");
		localStorage.setItem("theme", "light");
		updateColors("light");
	}
});

// Update colors based on the selected theme
function updateColors(theme) {
	const root = document.querySelector(":root");
	if (theme === "dark") {
		root.style.setProperty("--primary-color", "#33ddff");
		root.style.setProperty("--secondary-color", "#66e5ff");
		root.style.setProperty("--tertiary-color", "#00aacc");
		root.style.setProperty("--background-primary", "#121f21");
		root.style.setProperty("--background-secondary", "#061313");
		root.style.setProperty("--accent-color", "#f4a261");
	} else {
		root.style.setProperty("--primary-color", "#00aacc");
		root.style.setProperty("--secondary-color", "#00bfe6");
		root.style.setProperty("--tertiary-color", "#0095b3");
		root.style.setProperty("--background-primary", "#faffff");
		root.style.setProperty("--background-secondary", "#cde2e4");
		root.style.setProperty("--accent-color", "#f4a261");
	}
}

// Check for previously selected theme from local storage
const selectedTheme = localStorage.getItem("theme");
if (selectedTheme) {
	document.documentElement.setAttribute("data-theme", selectedTheme);
	updateColors(selectedTheme);
}