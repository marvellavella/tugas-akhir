function validateForm() {
    var post = document.getElementById("post").previousElementSibling.value; // Get the value of the textarea preceding the button

    if (post.trim() === '') {
        alert('Please write a post!');
        return false; // Prevent form submission
    } else {
        alert('Posting...');
    }

    return true; // Allow form submission if both validations pass
}