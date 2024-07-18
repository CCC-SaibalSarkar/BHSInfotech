function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    //alert('Button clicked! Submit form logic will execute next.');
    
    // Collect form data
    const formData = {
        id: 0,
        Name: document.getElementById('name').value,
        Email: document.getElementById('email').value,
        Subject: document.getElementById('subject').value,
        Message: document.getElementById('message').value
    };

    // Display loading message
    const loadingElement = document.querySelector('.loading');
    loadingElement.style.display = 'block';

    // Optional: Validate form fields here if needed
    console.log("OK");
    // Make API POST request
    fetch('http://localhost:12345/api/contact/AddData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        loadingElement.style.display = 'none'; // Hide loading message
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return; // Parse JSON response
    })
    .then(() => {
        // Show success message
        const sentMessageElement = document.querySelector('.sent-message');
        sentMessageElement.style.display = 'block';

        // Optional: Clear form fields after successful submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('message').value = '';
    })
    .catch(error => {
        console.error('Error:', error);
        // Show error message
        const errorMessageElement = document.querySelector('.error-message');
        errorMessageElement.textContent = 'There was an error sending your message. Please try again later.';
        errorMessageElement.style.display = 'block';
    });
}

// Add event listener to form submit button
const form = document.querySelector('.php-email-form');
form.addEventListener('submit', submitForm);