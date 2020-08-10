const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const subLink = document.getElementById('sub-link');
const bar = document.querySelector('.bar');
const popup = document.querySelector('.popup');

// theme
const theme = document.querySelector('.theme');
const orca = document.querySelector('.orca');
const theBlueLagoon = document.querySelector('.theBlueLagoon');
const deepSeaSpace = document.querySelector('.deepSeaSpace');


/********* Login & Registration ********/

const loginBtn = document.getElementById('login');
const registrationBtn = document.getElementById('registration');
const popupLogin = document.getElementById('popup-login');
const popupRegistration = document.getElementById('popup-registration');
const closeLoginBtn = document.getElementById('close-login');
const closeRegistrationBtn = document.getElementById('close-registration');

/*---------------Registration ID------------ */
const regUsername = document.getElementById('reg-username');
const regEmail = document.getElementById('reg-email');
const regPassword = document.getElementById('reg-password');
const regConPassword = document.getElementById('reg-con-password');
/*---------------Login ID------------ */
const loginUsername = document.getElementById('log-username');
const loginPassword = document.getElementById('log-password');

// Form error 
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}
// Form successful
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// get Field name by id
function getFieldName(input) {
    return input.id.charAt(4).toUpperCase() + input.id.slice(5);
}

// Empty field validation
function checkEmpty(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required.`);
        } else {
            showSuccess(input);
        }
    });
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters.`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters.`);
    } else {
        showSuccess(input);
    }
}

// Check valid Email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else if (regEmail.value.trim() === '') {
        showError(input, 'Email is Required.')
    } else {
        showError(input, 'Email is not valid.');
    }
}

// Check passwords match
function checkPasswordsMatch(password, conPassword) {
    if (password.value !== conPassword.value) {
        showError(conPassword, 'Password do not match');
    } else {
        showSuccess(conPassword);
    }
}

// Main Registration function
function registration(e) {
    e.preventDefault();
    checkLength(regUsername, 3, 15);
    checkEmail(regEmail);
    checkLength(regPassword, 6, 25);
    checkEmpty([regUsername, regPassword]);
    checkPasswordsMatch(regPassword, regConPassword);
}

function checkValidUser(loginArr) {
    loginArr.forEach((input, index) => {
        if ((index == 0 && input.value !== 'ahmed') || (index == 1 && input.value !== '1234')) {
            showError(input, 'Username or Password Incorrect.');
        }
    });
}

// main Login function
function login(e) {
    e.preventDefault();
    checkValidUser([loginUsername, loginPassword]);
    checkEmpty([loginUsername, loginPassword]);
}


// Main page
hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});


/******* Themes *********/
theme.addEventListener("click", () => {
    subLink.classList.toggle("active");
});

bar.addEventListener("click", () => {
    subLink.classList.remove("active");
});
orca.addEventListener("click", () => {
    container.classList.toggle("orca");
});
theBlueLagoon.addEventListener("click", () => {
    container.classList.toggle("theBlueLagoon");
});
deepSeaSpace.addEventListener("click", () => {
    container.classList.toggle("deepSeaSpace");
});


// login registration event

loginBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    popupLogin.style.display = "flex";
    popupRegistration.style.display = "none";
});
closeRegistrationBtn.addEventListener("click", () => {
    popup.style.display = "none";
});
registrationBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    popupRegistration.style.display = "flex";
    popupLogin.style.display = "none";
});
closeLoginBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

popupRegistration.addEventListener('submit', registration);
popupLogin.addEventListener('submit', login);