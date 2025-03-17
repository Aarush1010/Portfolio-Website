document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to your server
    // For demonstration purposes, we'll just log it to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
    alert('Your message has been sent!');
    
    // Clear the form
    document.getElementById('contact-form').reset();
});