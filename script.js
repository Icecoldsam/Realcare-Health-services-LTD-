// Smooth Scroll Function for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in on Scroll for Different Sections
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// Pop-up Modal for Contact Section
const modal = document.querySelector('.modal'); // The modal for contact form
const openModalBtn = document.querySelector('.get-in-touch'); // Get in Touch button
const closeModalBtn = document.querySelector('.close-modal'); // Close button in the modal

// Open modal when "Get in Touch" button is clicked
openModalBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    modal.style.display = 'block'; // Show the modal
});

// Close modal when close button is clicked
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
});

// Close modal when clicking outside the modal
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none'; // Hide the modal
    }
});
