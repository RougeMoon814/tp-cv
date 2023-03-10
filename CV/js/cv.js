//Documento JavaScript de Curriculum Vitae

// Hamburger menu for Mobile
let btnSideMenu = document.getElementById("hamburger");

let rightBar = document.getElementById("right");

btnSideMenu.onclick = function() {
    rightBar.classList.toggle("expand");
}


//LOGIN - Modal
// Get the modal (login)
let modalLogin = document.getElementById("login-form");

// Get the button that opens the modal
let btnLoginOpen = document.getElementById("login-btn");

// Get the X that closes the modal
let closebtn = document.getElementsByClassName("close")[0];

// Get the button Login username
let btnLoginContinue = document.getElementById("login-submit");

// Get the modal (logoff)
let modalLogoff = document.getElementById("logoff-modal");

// Get the (User) button
let btnUser = document.getElementById("user-id");

// Get the button for Logoff
let btnLogoff = document.getElementById("logoff");

// When the user clicks the button, open the modal 
btnLoginOpen.onclick = function() {
modalLogin.style.display = "block";
}

// When the user clicks X close the modal
closebtn.onclick = function() {
    modalLogin.style.display = "none";
}

// When the user Logs in
btnLoginContinue.onclick = function() {
    let userName = document.getElementById('login-user').value;
    let userPassword = document.getElementById('login-password').value;

    // Solamente hacer algo si el username (y password) no son un string vacio
    if (userName == "", userPassword == "") {} else {
    document.getElementById('user').innerHTML = userName;

    document.getElementById('user-id').style.display = "block";
    btnLoginOpen.style.display = "none";

    modalLogin.style.display = "none";

    console.log("Username: " + userName);
    }
}

//LOGOFF - Modal

// Click en el nombre de usuario permite deslogearse
btnUser.onclick = function() {
    modalLogoff.style.display = "block";
}

// Click fuera de la ventana ignora el Logoff
window.onclick = function(event) {
    if (event.target == modalLogoff) {
        modalLogoff.style.display = "none";
    }
}

// Al desloguearse se restora el botón de login
btnLogoff.onclick = function() {
    modalLogoff.style.display = "none";
    document.getElementById('user-id').style.display = "none";
    btnLoginOpen.style.display = "block";
}
