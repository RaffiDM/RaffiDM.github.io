document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle menu on click
    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const links = document.querySelectorAll('.nav-links li a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('header')) {
            navLinks.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;
            
            // Validation
            if (!name || !email || !subject || !message) {
                showAlert('Please fill in all fields', 'error');
                return;
            }
            
            // Here you would normally send the form data to a server
            // For demonstration, we'll just show a success message
            showAlert('Thank you for your message! I will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Alert function
    function showAlert(message, type) {
        // Create alert element
        const alertDiv = document.createElement('div');
        alertDiv.className = `form-alert ${type}`;
        alertDiv.textContent = message;
        
        // Add alert to the page
        const formContainer = document.querySelector('.contact-form-container');
        formContainer.insertBefore(alertDiv, contactForm);
        
        // Remove alert after 5 seconds
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }
    
    // Add this CSS for alerts
    const style = document.createElement('style');
    style.textContent = `
        .form-alert {
            padding: 0.75rem 1rem;
            margin-bottom: 1rem;
            border-radius: 0.5rem;
            font-weight: 500;
        }
        .form-alert.success {
            background-color: rgba(46, 213, 115, 0.15);
            color: #2ed573;
            border: 1px solid #2ed573;
        }
        .form-alert.error {
            background-color: rgba(255, 71, 87, 0.15);
            color: #ff4757;
            border: 1px solid #ff4757;
        }
    `;
    document.head.appendChild(style);
});