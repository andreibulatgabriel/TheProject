
var email = "";
var password = "";
var url = "http://localhost:3000/api/auth/login";

var signUp = document.querySelector('#login');
signUp.addEventListener('click', logIn);

var form = document.querySelector('form');
form.addEventListener("keyup", handleInput);

function logIn(e) {
    e.preventDefault();
    var body = {
        email,
        password
    };
    fetch(url, {
        method: "POST",
        body: JSON.stringify(body)
    })
        .then(resp => resp.json())
        .then(res => {
            sessionStorage.setItem("token", res.token);
            window.location.assign('secondpage.html');
        })
        .catch(error => console.log(error))
}


function handleInput(e) {
    if (e.target.type === "email") {
        email = e.target.value;
    } else {
        password = e.target.value;
    }
}




