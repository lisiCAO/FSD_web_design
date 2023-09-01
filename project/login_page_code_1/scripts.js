// File: login_page.html
//     Author: Lisi Cao
//     Date: August 31, 2023
//     Description: click button "login", turn to page login.
//     Contact: lisi.cao@johnabbottcollege.net
//     Copyright: 2023

document.addEventListener('DOMContentLoaded', function() {
    // get parameters
    var loginBtn = document.querySelector('.login-btn');
    var loginModal = document.querySelector('.login-modal');
    var closeBtn = document.querySelector('.close-btn');
    
    // click to open page
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });
    
    // click to close page
    closeBtn.addEventListener('click', function() {
        loginModal.style.display = 'none';
    });
});

// click input bar to active label
function activateLabel(element) {
    const parent = element.parentElement;
    parent.classList.add("focused");
}
// deactive label
function deactivateLabel(element) {
    const parent = element.parentElement;
    if (!element.value) {
        parent.classList.remove("focused");
    }
}






