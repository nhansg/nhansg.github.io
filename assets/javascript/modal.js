var btnRegister = document.getElementsByClassName("btn_register")[0];
var btnLogin = document.getElementsByClassName("btn_login")[0];
var btnSubRegister = document.getElementsByClassName("btn_subregister")[0];
var btnSubLogin = document.getElementsByClassName("btn_sublogin")[0];

var modal = document.getElementsByClassName("modal")[0];
var modalRegister = document.getElementsByClassName("modal_register")[0];
var modalLogin = document.getElementsByClassName("modal_login")[0];


btnRegister.addEventListener("click",clickRegister)
btnLogin.addEventListener("click",clickLogin)
btnSubRegister.addEventListener("click",clickRegister)
btnSubLogin.addEventListener("click",clickLogin)

function clickRegister()
{
    modal.style.display = "block";
    modalRegister.style.display = "block";
    modalLogin.style.display = "none";
}

function clickLogin(){
    modal.style.display = "block";
    modalRegister.style.display = "none";
    modalLogin.style.display = "block";
}

window.onclick = function(event)
{
    if(event.target == modal)
    {
        modal.style.display = "none";
    }
}