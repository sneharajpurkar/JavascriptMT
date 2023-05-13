function register(event) {
    event.preventDefault();

    var username = document.getElementById("t-name").value;
    var useremail = document.getElementById("t-email").value;
    var userpassword = document.getElementById("t-password").value;
    var userconformPassword = document.getElementById("t-confirmPassword").value;

    var userData = { name: username, email: useremail, password: userpassword, conformPassword: userconformPassword };

    var t_storage = JSON.parse(localStorage.getItem("t-user-data")) || [];

    var flag = false;
    for (var i = 0; i < t_storage.length; i++) {
        if (t_storage[i].email === useremail) {
            flag = true;
        }
    }
    if (flag) {
        alert("registartion not done");
    }
    else if (userpassword.length < 8) {
        alert("password must be 8 digit");
    }
    else if (userpassword.length !== userconformPassword.length) {
        alert("password not match");
    }
    else {
        t_storage.push(userData);
        localStorage.setItem("t-user-data", JSON.stringify(t_storage));
        document.getElementById("t-name").value = "";
        document.getElementById("t-email").value = "";
        document.getElementById("t-password").value = "";
        document.getElementById("t-confirmPassword").value = "";
        window.location.href = "login.html";
        alert("registration done")
    }
}

function login(event) {
    alert("work")
    event.preventDefault();

    var useremail = document.getElementById("t-email").value;
    var userpassword = document.getElementById("t-password").value;

    var userData = { email: useremail, password: userpassword };

    var t_storage = JSON.parse(localStorage.getItem("t-user-data"));

    var t_current_user;

    var flag = false;
    for (var i = 0; i < t_storage.length; i++) {
        if (t_storage[i].email === useremail && t_storage[i].password === userpassword) {
            t_current_user = t_storage[i];
            flag = true;
        }
    }
    if (flag) {
        t_storage.push(userData);
        localStorage.setItem("t-current-user-data", JSON.stringify(t_current_user));
        document.getElementById("t-email").value = "";
        document.getElementById("t-password").value = "";
        window.location
        alert("login done");
    }
    else {
        alert("login not done")
    }
}

function addProduct(event) {
    event.preventDefault();

    var userimage = document.getElementById("p-image").value;
    var username = document.getElementById("p-name").value;
    var userprice = document.getElementById("p-price").value;

    var userDatap = { image: userimage, name: username, price: userprice};

    var p_storage = JSON.parse(localStorage.getItem("p-user-data")) || [];

    var flag = false;
    for (var i = 0; i < p_storage.length; i++) {
        if (p_storage[i].image === userimage && p_storage[i].name === username && p_storage[i].price === userprice) {
            flag = true;
        }
    }
    if (flag) {
        alert("product not added");
    }
    else {
        p_storage.push(userDatap);
        localStorage.setItem("p-user-data", JSON.stringify(p_storage));
        document.getElementById("p-image").value = "";
        document.getElementById("p-name").value = "";
        document.getElementById("p-price").value = "";
        alert("product added")
    }
}