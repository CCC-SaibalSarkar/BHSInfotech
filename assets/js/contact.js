function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    alert('Button clicked! Submit form logic will execute next.');
    
    // // Collect form data
    // const formData = {
    //     name: document.getElementById('name').value,
    //     email: document.getElementById('email').value,
    //     subject: document.getElementById('subject').value,
    //     message: document.getElementById('message').value
    // };

    // // Display loading message
    // const loadingElement = document.querySelector('.loading');
    // loadingElement.style.display = 'block';

    // // Optional: Validate form fields here if needed

    // // Make API POST request
    // fetch('https://api.example.com/send-email', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    // })
    // .then(response => {
    //     loadingElement.style.display = 'none'; // Hide loading message
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json(); // Parse JSON response
    // })
    // .then(data => {
    //     // Show success message
    //     const sentMessageElement = document.querySelector('.sent-message');
    //     sentMessageElement.style.display = 'block';

    //     // Optional: Clear form fields after successful submission
    //     document.getElementById('name').value = '';
    //     document.getElementById('email').value = '';
    //     document.getElementById('subject').value = '';
    //     document.getElementById('message').value = '';
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     // Show error message
    //     const errorMessageElement = document.querySelector('.error-message');
    //     errorMessageElement.textContent = 'There was an error sending your message. Please try again later.';
    //     errorMessageElement.style.display = 'block';
    // });
}

// Add event listener to form submit button
const form = document.querySelector('.php-email-form');
form.addEventListener('submit', submitForm);