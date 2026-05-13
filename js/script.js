// Simple contact form interaction

const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Thank you for contacting AquaWorld!');
    });
}