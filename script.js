document.addEventListener("DOMContentLoaded", function() {
    
    // ================= TERA ORIGINAL FORM LOGIC =================
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm && submitBtn) {
        contactForm.addEventListener('submit', function() {
            // Jab user form submit kare, button ka text aur color change ho jaye
            submitBtn.innerHTML = 'माहिती पाठवली जात आहे... <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.style.background = "#00a8ff"; 
            submitBtn.style.pointerEvents = "none"; 
        });
    }

    // ================= NEW POPUP LOGIC =================
    const popup = document.getElementById("construction-popup");
    const closePopupBtn = document.getElementById("closePopupBtn");

    if (popup) {
        // Site khulne ke 3 seconds baad popup aayega
        setTimeout(() => {
            popup.classList.add("show");
        }, 3000);

        // Close button click karne par hide hoga
        if (closePopupBtn) {
            closePopupBtn.addEventListener("click", () => {
                popup.classList.remove("show");
            });
        }

        // Popup ke bahar click karne par bhi close hoga
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.classList.remove("show");
            }
        });
    }
});
