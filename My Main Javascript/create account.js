document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');
    const errorElement = document.getElementById('errorMessage');
    const successElement = document.getElementById('successMessage');

    // Email validation function
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Show error message
    function showError(message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        successElement.style.display = 'none';
    }

    // Show success message
    function showSuccess(message) {
        successElement.textContent = message;
        successElement.style.display = 'block';
        errorElement.style.display = 'none';
    }

    // Form submission handler
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        // Reset messages
        errorElement.style.display = 'none';
        successElement.style.display = 'none';

        // Validate inputs
        if (!fullName) {
            showError('Please enter your full name');
            return;
        }

        if (!email) {
            showError('Please enter your email address');
            return;
        }

        if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }

        if (!password) {
            showError('Please create a password');
            return;
        }

        if (password.length < 8) {
            showError('Password must be at least 8 characters');
            return;
        }

        if (password !== confirmPassword) {
            showError('Passwords do not match');
            return;
        }

        // Show loading state
        btnText.style.display = 'none';
        btnSpinner.style.display = 'inline-block';
        submitBtn.disabled = true;

        // Simulate account creation API call
        setTimeout(() => {
            // In a real application, this would be a fetch/axios call to your backend
            console.log('Account created for:', email);
            
            // Hide loading state
            btnText.style.display = 'inline-block';
            btnSpinner.style.display = 'none';
            submitBtn.disabled = false;

            // Show success message
            showSuccess('Account created successfully!');
            
            // Clear form
            signupForm.reset();

            // Show welcome alert
            alert(`Welcome to Derma Glow Skincare, ${fullName}! Your account has been created.`);
            
            // In a real app, you would redirect after success
            // setTimeout(() => { window.location.href = 'dashboard.html'; }, 2000);
            
        }, 1500); // Simulate network delay
    });

    // Clear error message when user starts typing
    const inputs = [fullNameInput, emailInput, passwordInput, confirmPasswordInput];
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (errorElement.style.display === 'block') {
                errorElement.style.display = 'none';
            }
        });
    });

    // Password strength indicator (optional enhancement)
    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        
    });
});
