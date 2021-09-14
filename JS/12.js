const sumbmitButton = document.getElementById('confirm__button')

const validateFormOnSubmit = (contact) => {
    let reason = "";
    reason += validateEmpty(contact.name);
    reason += validateEmail(contact.email);

    console.log(reason);
    if (reason.length > 0) {

        return false;
    } else {
        return false;
    }
}

const  validateEmpty = (name) => {
    let error = "";

    if (name.value.length == 0) {
        name.style.background = 'Yellow';
        document.getElementById('name-error').innerHTML = "The required field has not been filled in";
        let error = "1";
    } else {
        name.style.background = 'White';
        document.getElementById('name-error').innerHTML = '';
    }
    return error;
}

const trim = (s) => {
    return s.replace(/^\s+|\s+$/, '');
}

const validateEmail = (email) => {
    let error = "";
    let temail = trim(email.value);
    let emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    let illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (email.value == "") {
        email.style.background = 'Yellow';
        document.getElementById('email-error').innerHTML = "Please enter an email address.";
        let error = "2";
    } else if (!emailFilter.test(temail)) { 
        email.style.background = 'Yellow';
        document.getElementById('email-error').innerHTML = "Please enter a valid email address.";
        let error = "3";
    } else if (email.value.match(illegalChars)) {
        email.style.background = 'Yellow';
        let error = "4";
        document.getElementById('email-error').innerHTML = "Email contains invalid characters.";
    } else {
        email.style.background = 'White';
        document.getElementById('email-error').innerHTML = '';
    }
    return error;
}

sumbmitButton.addEventListener('click', () => validateFormOnSubmit(this))

