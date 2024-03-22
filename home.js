function validateForm() {
    var search = document.getElementById("search").value;

    if (textInput.value.trim() === '') {
        alert('Write a caption first!');
    }
    else {
        alert('Posting...')
    }

    return true;
}