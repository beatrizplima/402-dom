let emails = [
    {email: "paula.18@gmail.com", senha:"123"},
    {email: "joao@gmail.com", senha:"jujubinha12"},
    {email: "be.nave@seilaoq.com", senha: "789"},
    {email: "fofurinha13@gmail.com", senha: "456"},
    {email: "beeb@gmail.com", senha: "147"},
];

let inputEmail = document.querySelector("#inputEmail");
let inputSenha = document.querySelector("#inputSenha");
let resposta = document.querySelector("p");

function validarLogin();
for(let contas of emails){
    if(inputEmail.value == emails.contas && inputSenha.value == emails.senha){
        resposta.innerHTML = "Login Aprovado"
    }
}