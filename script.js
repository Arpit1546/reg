const form = document.getElementById('registration-form');
const eInput = document.getElementById('email');
const mobInput = document.getElementById('mobile');

form.addEventListener('submit', function (e) {
    let valid = true;

    const emailp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailp.test(eInput.value)) {
        valid = false;
        alert('Please enter a valid email address.');
        e.preventDefault();
    }

    const mobP = /^\d{10}$/;
    if (!mobP.test(mobInput.value)) {
        valid = false;
        alert('Please enter a valid 10-digit mobile number.');
        e.preventDefault();
    }

    if (valid) {
    }
});
