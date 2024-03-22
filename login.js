function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error");

    var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!emailRegex.test(email)) {
        errorElement.innerHTML = "Please enter a valid Gmail address.";
        return false;
    }

    if (password.length < 8) {
        errorElement.innerHTML = "Password must be at least 8 characters long.";
        return false;
    }

    return true;
}
