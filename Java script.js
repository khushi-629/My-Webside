// Get the current year for the footer
const currentYearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Basic form submission handling (for demonstration)
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('Radha ').value;
        const email = document.getElementById('pratibharana629@gmail.com').value;
        const message = document.getElementById('message').value;

        alert(`Thank you for your message, ${name}! We will get back to you soon.`);

        // In a real scenario, you would send this data to a server
        console.log('Name:', name );
        console.log('Email:', email);
        console.log('Message:', message);

        contactForm.reset(); // Clear the form
    });
}

// Optional: Add some basic animations or interactions
// Example: Change the hero section background on hover
const heroSection = document.getElementById('hero');
if (heroSection) {
    heroSection.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#b2ebf2'; // Lighten on hover
    });
    heroSection.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#e0f7fa'; // Revert on mouse out
    });
}

// Example: Highlight navigation link on scroll (more advanced)
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

function highlightNavLink() {
    const scrollPosition = window.scrollY + 50; // Add some offset

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Add a class for active link in CSS
const style = document.createElement('style');
style.textContent = `
    nav a.active {
        font-weight: bold;
        color: #007bff;
    }
`;
document.head.appendChild(style);