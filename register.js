function validateForm() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var birthday = document.getElementById("birthday").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var file = document.getElementById("filetoupload").files[0];
    var number = document.getElementById("number").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var errorElement = document.getElementById("error");

    if (firstname.trim() === '' || lastname.trim() === '' || firstname.length < 3 || lastname.length < 3) {
        errorElement.textContent = "First name and last name must be at least 3 characters and cannot be empty.";
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorElement.textContent = "Please enter a valid email address.";
        return false;
    }

    if (birthday.trim() === '') {
        errorElement.textContent = "Please enter your date of birth.";
        return false;
    }

    if (gender === '') {
        errorElement.textContent = "Please select your gender.";
        return false;
    }

    if (address.trim() === '') {
        errorElement.textContent = "Please enter your address.";
        return false;
    }

    if (!file) {
        errorElement.textContent = "Please upload a profile photo.";
        return false;
    }

    if (phoneNumber.trim() === '' || isNaN(phoneNumber)) {
        errorElement.textContent = "Please enter a valid phone number.";
        return false;
    }

    if (password.length < 8) {
        errorElement.textContent = "Password must be at least 8 characters long.";
        return false;
    }

    if (password !== confirmPass) {
        errorElement.textContent = "Passwords do not match.";
        return false;
    }

    return true;
}
