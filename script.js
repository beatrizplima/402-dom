//function somar (num1, num2){
//    console.log(num1 + num2);
//}

//somar(57, 32);


//function subtrair (num1, num2){
//    console.log(num1 - num2);
//}

//subtrair(690, 123);

//let corpo = document.querySelector("body");
//let botao = document.querySelector("button");

//function trocarCor(){
  //  corpo.style.backgroundColor = "limegreen";
//}

//botao.onclick = trocarCor;

//let corpo = document.querySelector("body");
//let botoes = document.querySelectorAll("button");

let inputEmail = document.querySelector("#inputEmail");
let inputSenha = document.querySelector("#inputSenha");
let resposta = document.querySelector("p");
let botao = document.querySelector("button");

function validarLogin(){
    if(inputEmail.value == "bia.pavan1904@gmail.com" && inputSenha.value == "batatinha"){
        resposta.innerHTML = "Login Aprovado";
        resposta.style.color = "blue";
        resposta.style.border = "2px blue solid";
    }

    else{
        resposta.innerHTML = "Login Inválido";
        resposta.style.color = "red";
        resposta.style.border = "2px red dotted";
    }
}

botao.onclick = validarLogin;