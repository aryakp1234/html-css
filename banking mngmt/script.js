
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// CTA Button Animation
const ctaButton = document.getElementById('cta-button');
ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.backgroundColor = '#ca6702';
});

ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.backgroundColor = '#ee9b00';
});

// Form Submission Alert
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    contactForm.reset();
});

// Card Hover Effect
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});