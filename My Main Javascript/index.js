document.addEventListener("DOMContentLoaded", function() {
    // Get the sign-up form and login form
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    // Add event listener for sign-up form submission
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert("Sign Up successful! Welcome to Derma Glow Skincare.");
        // Optionally, you can submit the form here if needed
        // this.submit();
    });

    // Add event listener for login form submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert("Login successful! Welcome back to Derma Glow Skincare.");
        // Optionally, you can submit the form here if needed
        // this.submit();
    });
});
