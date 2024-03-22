function validateForm() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorElement = document.getElementById("error");

    var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (firstname.length < 3) {
        alert("First name must be at least 8 characters long.")
    }

    if (lastname.length < 3) {
        alert("Last name must be at least 8 characters long.")
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid Gmail address.")
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.")
    }

    return true;
}
