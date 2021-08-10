let menu = document.getElementById("menu");
let header = document.getElementById("header");
let num;

function showMenu() {
    num = window.scrollY;
    menu.style.transform = "translateY(" + num + "px)";
    menu.style.display = "block";
    header.style.opacity = "0";
}

function hideMenu() {
    menu.style.transition = "all 0.5s";
    menu.style.transform = "translateY(-100%)";
    header.style.opacity = "100%";
}

let feedback = document.getElementById("feedback");
let form = document.getElementById("form");

window.addEventListener('scroll', function(e) {
    if (header.style.opacity == "0") {
        if (window.scrollY < num) {
            num = window.scrollY;
            menu.style.transform = "translateY(" + num + "px)";
            menu.style.transition = "all 0s";
        }
    } 

    if (feedback.style.display == "flex") {
        if (window.scrollY < scrollForm) {
            scrollForm = window.scrollY;
            form.style.transform = "translateY(" + (scrollForm + 97) + "px)";
            form.style.transition = "all 0s";
        }
    }
});

let contact = document.getElementById("contact");
let scrollForm;

contact.addEventListener('click', function(e) {
    scrollForm = window.scrollY;
    form.style.transform = "translateY(" + (scrollForm + 97) + "px)";
    feedback.style.display = "flex";
});

let confirmation = document.getElementById("confirm");
let check = document.getElementById("check");
let label = document.getElementById("confirm_label");

confirmation.addEventListener('click', function(e) {
    if (confirmation.checked) {
        check.style.display = "block";
        label.style.backgroundColor = "white";
    } else {
        check.style.display = "none";
    }
});

let inputs = document.getElementsByClassName("form__input");

function hideForm() {
    feedback.style.display = "none";
    confirmation.checked = true;
    check.style.display = "block";

    for (let i = 0 ; i < inputs.length; i++) {
            inputs[i].style.border = "solid 2px #2D635E";
            inputs[i].placeholder = "";
            inputs[i].value = "";
    }
}

let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email_input = document.getElementById("email");
let phone = document.getElementById("phone");
let message = document.getElementById("message");

let success = document.getElementById("success");


function User (name, surname, email, phone, message) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.message = message;
}

function submitForm() {
    if (!first_name.value || !email || !message) {
        first_name.style.border = "solid 2px red";
        first_name.placeholder = "The field is required";
        email_input.style.border = "solid 2px red";
        email_input.placeholder = "The field is required";
        message.style.border = "solid 2px red";
        message.placeholder = "The field is required";
    }
    else if (!confirmation.checked) {
        label.style.backgroundColor = "red";
    } else {
        let name = first_name.value;
        let surname = last_name.value;
        let email = email_input.value;
        let phoneNumber = phone.value;
        let text = message.value;

        let user = new User (name, surname, email, phoneNumber, text);

        localStorage.setItem('user' + email, JSON.stringify(user));

        for (let i = 0 ; i < inputs.length; i++) {
            inputs[i].value = "";
        }

        success.style.display = "block";

        hideForm();

        setTimeout(function() {success.style.opacity = "75"}, 2000);
        setTimeout(function() {success.style.opacity = "50"}, 2000);
        setTimeout(function() {success.style.opacity = "25"}, 2000);
        setTimeout(function() {success.style.opacity = "0"}, 2000);

        setTimeout(function() {success.style.display = "none"}, 5000);
    }
}

for (let i = 0 ; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function(e) {
        inputs[i].style.border = "solid 2px #2D635E";
        inputs[i].placeholder = "";
    });
}