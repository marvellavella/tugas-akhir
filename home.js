function validateForm() {
    var search = document.getElementById("search").value;

    form.addEventListener('submit', function(event) {
        if (textInput.value.trim() === '') {
            alert('Write a caption first!');
            event.preventDefault();
        }
        else {
            alert('Posting...')
        }
    });