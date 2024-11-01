
// Show Sign Up Form for Email and Password Verification
function showSignUpForm() {
    document.getElementById('initial-container').classList.add('hidden');
    document.getElementById('signup-auth-container').classList.remove('hidden');
}

// Show Login Form for Existing Account Holders
function showLoginOptions() {
    document.getElementById('initial-container').classList.add('hidden');
    document.getElementById('login-container').classList.remove('hidden');
}

// Show Full Registration Form after Email/Password Verification
function handleAuth(event) {
    event.preventDefault();
    document.getElementById('signup-auth-container').classList.add('hidden');
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('register-container').classList.remove('hidden');
}

// Handle Google Authentication
function handleGoogleAuth() {
    alert("Google Sign Up/Login is not yet implemented.");
    // Implement Google Authentication here if needed
}

// Show Thank You Message after Registration
function handleRegister(event) {
    event.preventDefault();
    document.getElementById('register-container').classList.add('hidden');
    document.getElementById('thankyou-container').classList.remove('hidden');
}

// Show Full Form Directly for Adding Another Response
function showFullForm() {
    document.getElementById('thankyou-container').classList.add('hidden');
    document.getElementById('register-container').classList.remove('hidden');
}

// Log Out Functionality
function logOut() {
    document.getElementById('thankyou-container').classList.add('hidden');
    document.getElementById('initial-container').classList.remove('hidden');
}
