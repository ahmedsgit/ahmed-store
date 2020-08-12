const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const subLink = document.getElementById('sub-link');
const navHome = document.getElementById('nav-home');

const bar = document.querySelector('.bar');
const popup = document.querySelector('.popup');
const main = document.getElementById('main');
const loading = document.getElementById('loading');

const mainContainer = document.getElementById('main-container');
const notification = document.getElementById('notification-container');

// developers
const developersProfile = document.getElementById('developers-profile');
const developersBtn = document.getElementById('developers-btn');

// theme
const theme = document.querySelector('.theme');
const orca = document.querySelector('.orca');
const theBlueLagoon = document.querySelector('.theBlueLagoon');
const deepSeaSpace = document.querySelector('.deepSeaSpace');


/********* Login & Registration ********/
var usernameFlag = false,
    emailFlag = false,
    passwordFlag = false,
    conPasswordFlag = false;

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

// get Flag for local Storage
function getFlag(input) {
    if (input.id === regUsername.id) {
        usernameFlag = true;
    } else if (input.id === regPassword.id) {
        passwordFlag = true;
    } else if (input.id === regEmail.id) {
        emailFlag = true;
    } else {
        console.log();
    }
}

function lostFlag(input) {
    if (input.id === regUsername.id) {
        usernameFlag = false;
    } else if (input.id === regPassword.id) {
        passwordFlag = false;
    } else if (input.id === regEmail.id) {
        emailFlag = false;
    } else {
        console.log();
    }
}

// get Field name by id
function getFieldName(input) {
    return input.id.charAt(4).toUpperCase() + input.id.slice(5);
}

// Unique User Check
function uniqueUserCheck(input) {
    const data = getLocalStorageData();
    for (const item of data) {
        if (input.value === item.username) {
            showError(input, 'This username already taken.');
            lostFlag(input);
            break;
        } else {
            showSuccess(input);
            getFlag(input);
            break;
        }
    }


}

// Empty field validation
function checkEmpty(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required.`);
            lostFlag(input);
        } else {
            showSuccess(input);
            getFlag(input);
        }
    });
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters.`);
        lostFlag(input);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters.`);
        lostFlag(input);
    } else {
        showSuccess(input);
        getFlag(input);
    }
}

// Check valid Email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
        getFlag(input);
    } else if (regEmail.value.trim() === '') {
        showError(input, 'Email is Required.');
        lostFlag(input);
    } else {
        showError(input, 'Email is not valid.');
        lostFlag(input);
    }
}

// Check passwords match
function checkPasswordsMatch(password, conPassword) {
    if (conPassword.value.trim() === '') {
        showError(conPassword, '');
        lostFlag(password);
    } else if (password.value !== conPassword.value) {
        showError(conPassword, 'Password do not match');
        lostFlag(password);
    } else {
        showSuccess(conPassword);
        getFlag(password);
    }
}

// Store registration data in local Storage
function storeData() {
    var registrationData = JSON.parse(localStorage.getItem("registration") || "[]");
    // console.log(usernameFlag, passwordFlag, emailFlag);
    if (usernameFlag === true && passwordFlag === true && emailFlag === true) {
        const data = {
            username: regUsername.value,
            password: regPassword.value,
            email: regEmail.value
        }
        registrationData.push(data);
        localStorage.setItem('registration', JSON.stringify(registrationData));
        showNotification();
        popup.style.display = "none";
        setTimeout(() => {
            popup.style.display = "flex";
            popupLogin.style.display = "flex";
            popupRegistration.style.display = "none";
        }, 1000);
    }
    const message = document.getElementById('notification-message');
    message.innerText = 'Registration Successful';
}

// Get data from localStorage
function getLocalStorageData() {
    return JSON.parse(localStorage.getItem('registration'));
}


// Main Registration function
function registration() {
    checkPasswordsMatch(regPassword, regConPassword);
    uniqueUserCheck(regUsername);
    checkLength(regUsername, 3, 15);
    checkEmpty([regUsername, regPassword]);
    checkLength(regPassword, 6, 25);
    checkEmail(regEmail);
}
// login page validation
function logCheckEmpty(loginArr) {
    loginArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required.`);
            lostFlag(input);
        } else {
            showSuccess(input);
            getFlag(input);
        }
    });
}

function checkValidUser(userName, password) {
    const data = getLocalStorageData();
    for (const item of data) {
        if (item.username === userName.value && item.password === password.value)
            mainContainer.style.display = 'none';
        loading.style.display = "flex";
        hamburgerMenu.style.display = "none";
        setTimeout(() => {
            loading.style.display = "none";
            hamburgerMenu.style.display = "flex";
        }, 4000);
    }
    subLink.classList.remove("active");
}

// main Login function
function login(e) {
    e.preventDefault();
    logCheckEmpty([loginUsername, loginPassword]);
    checkValidUser(loginUsername, loginPassword);
}

// notification page
function showNotification() {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 4000);
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
    container.classList.remove("theBlueLagoon");
    container.classList.remove("deepSeaSpace");
    subLink.classList.remove("active");
});
theBlueLagoon.addEventListener("click", () => {
    container.classList.toggle("theBlueLagoon");
    container.classList.remove("orca");
    container.classList.remove("deepSeaSpace");
    subLink.classList.remove("active");
});
deepSeaSpace.addEventListener("click", () => {
    container.classList.toggle("deepSeaSpace");
    container.classList.remove("orca");
    container.classList.remove("theBlueLagoon");
    subLink.classList.remove("active");
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
    popupRegistration.reset();
    popupRegistration.style.display = "flex";
    popupLogin.style.display = "none";
});
closeLoginBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

popupRegistration.addEventListener('submit', () => {
    registration();
    storeData();
});
popupLogin.addEventListener('submit', login);
developersBtn.addEventListener("click", () => {
    developersProfile.style.display = 'grid';
})