//Js
document.querySelector(".mobile-btn").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("active");
  });

  function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        document.getElementById('modal-title').innerText = 'Login';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        document.getElementById('modal-title').innerText = 'Sign Up';
    }
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const isLogin = document.getElementById('login-form').style.display !== 'none';
    let email, password, name, contact;

    if (isLogin) {
        email = document.getElementById('email').value;
        password = document.getElementById('password').value;

        // Validate login details
        if (email && password) {
            alert('Login successful!'); // Display success message
            // Optionally, refresh the page or redirect
            clearFields(); // Refresh the page
        } else {
            alert('Please enter valid details.'); // Display error message
        }
    } else {
        name = document.getElementById('new-name').value;
        email = document.getElementById('new-email').value;
        password = document.getElementById('new-password').value;
        contact = document.getElementById('new-contact').value;

        // Validate signup details
        if (name && email && password && contact) {
            alert('Sign up successful!'); // Display success message
            // Optionally, refresh the page or redirect
            clearFields(); // Refresh the page
        } else {
            alert('Please enter valid details.'); // Display error message
        }
    }
}