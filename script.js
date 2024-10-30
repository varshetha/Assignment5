const form = document.getElementById('registrationForm');
const usResidentCheckbox = document.getElementById('usResident');
const zipcodeContainer = document.getElementById('zipcodeContainer');
const zipcodeInput = document.getElementById('zipcode');

usResidentCheckbox.addEventListener('change', function() {
    zipcodeContainer.style.display = this.checked ? 'block' : 'none';
    zipcodeInput.required = this.checked;
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
        document.getElementById('acceptedMessage').textContent = 'Accepted';
        form.reset();
    }
});

function validateForm() {
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters long.';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Birth year validation
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const currentYear = new Date().getFullYear();
    if (isNaN(birthYear) || birthYear <= 1900 || birthYear >= currentYear) {
        document.getElementById('birthYearError').textContent = 'Please enter a valid birth year (after 1900 and before current year).';
        isValid = false;
    } else {
        document.getElementById('birthYearError').textContent = '';
    }

    // Zipcode validation
    if (usResidentCheckbox.checked) {
        const zipcode = zipcodeInput.value;
        if (!/^\d{5}$/.test(zipcode)) {
            document.getElementById('zipcodeError').textContent = 'Please enter a valid 5-digit zipcode.';
            isValid = false;
        } else {
            document.getElementById('zipcodeError').textContent = '';
        }
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    // Pizza preference validation
    const pizzaPreference = document.getElementById('pizzaPreference').value;
    if (!pizzaPreference) {
        document.getElementById('pizzaPreferenceError').textContent = 'Please select a pizza preference.';
        isValid = false;
    } else {
        document.getElementById('pizzaPreferenceError').textContent = '';
    }

    return isValid;
}