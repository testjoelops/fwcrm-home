document.getElementById('crm_lead-form').addEventListener('submit', function(event) {
    // Prevent the form from refreshing the page on submit
    event.preventDefault();
    
    // Hide the form
    document.getElementById('crm_lead-form').classList.add('hidden');
    
    // Show the thank you message
    document.getElementById('thank-you-message').classList.remove('hidden');

    // Optional: console log to verify
    console.log("Form submitted successfully");
    // Optionally: If you need to send the form data manually via AJAX, you can do it here.
    // For now, the form submission is blocked, and the thank-you message is shown.
});
