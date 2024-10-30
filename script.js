document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let hasError = false;
    clearErrors();

    // Name Validation
    if (document.getElementById("name").value.length < 3) {
      setError("nameError", "Name must be at least 3 characters long.");
      hasError = true;
    }

    // Year of Birth Validation
    let yearOfBirth = parseInt(
      document.getElementById("yearOfBirth").value,
      10
    );
    if (yearOfBirth < 1901 || yearOfBirth > 2099) {
      setError(
        "yearOfBirthError",
        "Year of birth must be between 1901 and 2099."
      );
      hasError = true;
    }

    // US Checkbox & Zipcode Validation
    let liveInUS = document.getElementById("liveInUS").checked;
    let zipcode = document.getElementById("zipcode").value;
    if (liveInUS && !/^\d{5}$/.test(zipcode)) {
      setError("zipcodeError", "Zipcode must be a 5 digit number.");
      hasError = true;
    }

    // Password Validation
    if (document.getElementById("password").value.length < 8) {
      setError("passwordError", "Password must be at least 8 characters long.");
      hasError = true;
    }

    // Preferred Pizza Type Validation
    if (document.getElementById("pizzaType").value === "") {
      setError("pizzaTypeError", "You must select a preferred type of pizza.");
      hasError = true;
    }

    if (!hasError) {
      document.getElementById("submissionMessage").textContent = "Accepted";
    }
  });

function setError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error").forEach(function (errorDiv) {
    errorDiv.textContent = "";
  });
  document.getElementById("submissionMessage").textContent = "";
}