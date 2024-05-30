document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission action
    let form = this
    console.log('hey')
    // Send the email
    emailjs.sendForm('service_1xun8hn', 'template_yk3ez4l', this)
        .then(function(response) {
            console.log(response)
            showPopup('success-popup');
            form.reset()
        }, function(error) {
           console.log('FAILED...', error);
           showPopup('error-popup');
        });
});

function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'block';
        setTimeout(function() {
            popup.style.display = 'none';
        }, 5000); // Hide popup after 5 seconds
}
