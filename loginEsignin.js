function validarLogin(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (localStorage.getItem("seccao")==null){
        alert("Não tem conta, por favor registe-se")
    }
    else{
        let data = localStorage.getItem("seccao").split("&");
        if (email == data[0] && password == data[1]){
            alert("Login com sucesso")
            window.location.href = "homescreen.html"
        }
        else{
            alert("Email ou password errados")
        }
    }
}
function validarSignin(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    let nome = document.getElementById("nome").value;
    let nif = document.getElementById("nif").value;
    let numero = document.getElementById("numero").value;

    if (nif.length !== 9 || isNaN(parseInt(nif))) {
        alert("NIF inválido");
    }
    else if(numero.length !== 9 || isNaN(parseInt(numero))){
        alert("Número inválido");}
    else if (password !== password2 || password.len<6){
        alert("Passwords não coincidem");
    }
    else if (nome.len<3) {
        alert("Nome inválido");
    }
    else if (localStorage.getItem("seccao")!=null){
        alert("Já existe uma conta!")
    }
    else{
        localStorage.setItem("seccao", email+"&"+password);
        alert("Registo com sucesso");
        window.location.href = "homescreen.html"
    }
}