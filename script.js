const campoLogin = document.querySelector("#login");
const campoSenha = document.querySelector("#senha");
const buttonValidacao = document.querySelector("button");


function clearform() {
    campoLogin.value = '';
    campoSenha.value = '';
}

const mensagem = document.createElement("p")

buttonValidacao.addEventListener("click", function(event){
    event.preventDefault()


    if(campoLogin.value.trim() === ''){
        mensagem.textContent = "campo obrigatorio"
        //alert("preencha o campo login")
        campoLogin.insertAdjacentElement("afterend", mensagem);
        mensagem.setAttribute("class", "error")
        return
    }

    
    if(campoSenha.value.trim() === ''){
        mensagem.textContent = "campo obrigatorio"
        //alert("preencha o campo senha")
        campoSenha.insertAdjacentElement("afterend", mensagem);
        mensagem.setAttribute("class", "error")
        return 
    }

    const valorLogin = campoLogin.value;
    const valorSenha = campoSenha.value;

    console.log(valorLogin);
    console.log(valorSenha);

    mensagem.classList.add("d-none");
    clearform()

})


