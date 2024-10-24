document.getElementById('submission-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    document.getElementById('form-container').innerHTML = '<div class="thank-you">Thank you for the submission!</div>';
});
