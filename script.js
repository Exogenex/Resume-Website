// JavaScript code for smooth scrolling with sticky header

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