(() => {

    const contact = document.getElementById('contact-now');
    const contactSuccess = document.getElementById('contact-us');

    if (!contact || !contactSuccess) return;

    contactSuccess.style.display = 'none';

    contact.addEventListener("click", (event) => {
        event.preventDefault();

        alert("Contact successful");

        contactSuccess.style.display = 'block';

        setTimeout(() => {
            window.location.href = "/thank_you_contact";
        }, 1000);
    });

})();
