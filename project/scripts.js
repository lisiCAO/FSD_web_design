const loginModal = document.querySelector('.login-modal');
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close-btn');
const passwordInput = document.querySelector('input[type="password"]');
const togglePasswordBtn = document.querySelector('.toggle-password');

loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    loginModal.style.display = 'none';
});

togglePasswordBtn.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordBtn.innerText = 'Hide';
    } else {
        passwordInput.type = 'password';
        togglePasswordBtn.innerText = 'Show';
    }
});
