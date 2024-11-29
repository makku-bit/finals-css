document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the email and password input values
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;

    // Check if the credentials are correct
    if (email === "go@gmail.com" && password === "gogo12345") {
        // Redirect to the main website
        window.location.href = "homepage.html";
    } else {
        // Display an error message
        document.getElementById('error-message').innerText = "Invalid email or password.";
    }
});
