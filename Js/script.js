document.getElementById("contact-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault();  // Prevent form submission
    }
});
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let nameError = document.getElementById('name-error');
    let emailError = document.getElementById('email-error');
    let messageError = document.getElementById('message-error');

    let valid = true;

    // Validate Name
    if (name.trim() === "") {
        nameError.textContent = "Name is required!";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate Email
    if (email.trim() === "") {
        emailError.textContent = "Email is required!";
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = "Invalid email format!";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate Message
    if (message.trim() === "") {
        messageError.textContent = "Message is required!";
        valid = false;
    } else {
        messageError.textContent = "";
    }

    return valid;
}
