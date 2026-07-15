document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            // Jab user form submit kare, button ka text aur color change ho jaye
            submitBtn.innerHTML = 'माहिती पाठवली जात आहे... <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.style.background = "#00a8ff"; 
            submitBtn.style.pointerEvents = "none"; 
        });
    }
});

