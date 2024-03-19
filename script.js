

   function getFormValue() {
  // Prevent default form submission behavior (avoids page refresh)
  event.preventDefault();

  // Get references to the form elements by name attribute
  const firstNameInput = document.querySelector('input[name="fname"]');
  const lastNameInput = document.querySelector('input[name="lname"]');

  // Extract the values from the form elements
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  // Combine the first and last names (handles potential middle names)
  const fullName = `${firstName} ${lastName}`;

  // Display the full name in an alert
  alert(fullName);
}
