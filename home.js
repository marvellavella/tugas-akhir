function validateForm() {
    var search = document.getElementById("search").value;

    if (search.trim() === '') {
        alert('Please enter a search query!');
        return false; // Prevent form submission
    } else {
        alert('Searching...');
        return true; // Allow form submission
    }
}