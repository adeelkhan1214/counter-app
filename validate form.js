// script.js
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const usernameInput = document.getElementById("username");
    const usernameError = document.getElementById("usernameError");
    
    if (isFieldEmpty(usernameInput.value)) {
        usernameError.textContent = "This field cannot be empty!";
        usernameInput.style.borderColor = "red";
    } else {
        usernameError.textContent = "";
        usernameInput.style.borderColor = "#ccc";
        alert("Form submitted successfully!");
        // this.submit(); // Uncomment to allow actual form submission
    }
});

/**
 * Checks if a form field is empty
 * @param {string} value - The input value to validate
 * @returns {boolean} - `true` if empty, `false` otherwise
 */
function isFieldEmpty(value) {
    return !value || value.trim() === "";
}