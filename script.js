document.addEventListener("DOMContentLoaded", function() {
    
    // ================= 1. MOBILE MENU TOGGLE =================
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            
            // Icon change from Bars to Cross (X)
            const icon = mobileToggle.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ================= 2. STICKY NAVBAR EFFECT =================
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                navbar.style.background = "rgba(255, 255, 255, 0.98)";
            } else {
                navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
                navbar.style.background = "rgba(255, 255, 255, 0.95)";
            }
        });
    }

    // ================= 3. INITIALIZE AOS ANIMATIONS =================
    // Check if AOS library is loaded
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,       // Animation ek hi baar hogi scroll karne par
            offset: 50,       // Element kitna screen mein aane par animation start ho
            duration: 800,    // Animation ki speed (0.8 seconds)
            easing: 'ease-in-out'
        });
    }

    // ================= 4. FORM SUBMISSION EFFECT =================
    // Yeh code Contact page par kaam aayega jab user form bharega
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', function() {
            // Button ka text aur style change hoga taaki user 2 baar click na kare
            submitBtn.innerHTML = 'माहिती पाठवली जात आहे... <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.style.opacity = "0.8"; 
            submitBtn.style.pointerEvents = "none"; 
        });
    }
});
