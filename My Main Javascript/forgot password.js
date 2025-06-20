document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const emailInput = document.getElementById('email');
    const errorElement = document.getElementById('errorMessage');
    const successElement = document.getElementById('successMessage');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');

    // Function to validate email format
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Function to show error message
    function showError(message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        successElement.style.display = 'none';
    }

    // Function to show success message
    function showSuccess(message) {
        successElement.textContent = message;
        successElement.style.display = 'block';
        errorElement.style.display = 'none';
    }

    // Form submission handler
    forgotPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Reset messages
        errorElement.style.display = 'none';
        successElement.style.display = 'none';

        // Validate input
        if (!email) {
            showError('Please enter your email address');
            return;
        }

        if (!isValidEmail(email)) {
            showError('Please enter a valid email address');
            return;
        }

        // Show loading state
        btnText.style.display = 'none';
        btnSpinner.style.display = 'inline-block';
        submitBtn.disabled = true;

        // Simulate API call to send reset link
        setTimeout(() => {
            // In a real application, this would be a fetch/axios call to your backend
            console.log('Reset link requested for:', email);
            
            // Hide loading state
            btnText.style.display = 'inline-block';
            btnSpinner.style.display = 'none';
            submitBtn.disabled = false;

            // Show success message
            showSuccess(`Password reset link has been sent to ${email}`);
            emailInput.value = '';

            // Show alert (optional)
            alert(`Password reset instructions have been sent to ${email}. Please check your email.`);
            
            // In a real app, you might redirect after success
            // setTimeout(() => { window.location.href = 'reset-instructions.html'; }, 3000);
            
        }, 1500); // Simulate network delay
    });

    // Clear error message when user starts typing
    emailInput.addEventListener('input', function() {
        if (errorElement.style.display === 'block') {
            errorElement.style.display = 'none';
        }
    });
});
