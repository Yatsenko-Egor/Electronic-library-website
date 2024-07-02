function checkForm() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var email = document.getElementById("email").value;

    if (name == "") {
        alert("Введите имя.");
        document.forms[0].name.focus();
        return false;
    } else if (password.length < 5) {
        alert("Пароль должен содержать более 4-х символов.");
        document.forms[0].password.focus();
        return false;
    } else if (password != confirm_password) {
        alert("Пароли не совпадают.");
        document.forms[0].confirm_password.focus();
        return false;
    } else if (email.length == 0) {
        alert("Введите электронный адрес");
        document.forms[0].email.focus();
        return false;
    } else if (email.indexOf('@') == -1) {
        alert("Электронный адрес должен содержать символ '@'.");
        document.forms[0].email.focus();
        return false;
    }
    return true;
}


document.getElementById('registerButton').onclick = function() {
    document.getElementById('register-window').style.display = "block";
}

document.getElementsByClassName('close-window ')[0].onclick = function() {
    document.getElementById('register-window').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('register-window')) {
        document.getElementById('register-window').style.display = "none";
    }
}