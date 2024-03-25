function validateForm() {
    var firstname = document.getElementsByName("firstname")[0].value.trim();
    var lastname = document.getElementsByName("lastname")[0].value.trim();
    var email = document.getElementById("email").value.trim();
    var birthday = document.getElementsByName("birthday")[0].value.trim();
    var gender = document.getElementById("gender").value;
    var address = document.getElementsByName("address")[0].value.trim();
    var number = document.getElementsByName("number")[0].value.trim();
    var password = document.getElementsByName("password")[0].value.trim();
    var confirmPassword = document.getElementsByName("confirm")[0].value.trim();

        var hasError = false;

        var emailRegex = /^[^\s@]+@gmail\.com$/;

        if (firstname.length < 3) {
            alert("First name must be at least 3 characters long.");
            return;
        }

        if (lastname.length < 3) {
            alert("Last name must be at least 3 characters long.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Invalid email format. Please enter a valid Gmail address.");
            return;
        }

        if (birthday === "") {
            alert("Please enter your birthday.");
            return;
        }

        if (gender === "") {
            alert("Please select your gender.");
            return;
        }

        if (address === "") {
            alert("Please enter your address.");
            return;
        }

        var fileupload = document.getElementById("filetoupload");
        if (!fileUpload.value) {
            alert("Please upload your profile photo.");
            return;
        }

        if (number === "" || isNaN(number)) {
            alert("Please enter a valid phone number.");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!hasError) {
            document.forms["myForm"].submit();
        }
    }