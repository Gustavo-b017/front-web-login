const campoLogin = document.querySelector("#login");
const campoSenha = document.querySelector("#senha");
const buttonValidacao = document.querySelector("button");


function clearform(){
    campoLogin.value = ""
    campoSenha.value = ""
}

const pMensagem = document.createElement("p")

buttonValidacao.addEventListener("click", function(event){
    event.preventDefault()


    if(campoLogin.value.trim() === ""){
        pMensagem.textContent = "campo obrigatorio"
        alert("preencha o campo login")
        pMensagem.setAttribute("class", "erro")
        return false
    }

    
    if(campoSenha.value.trim() === ""){
        pMensagem.textContent = "campo obrigatorio"
        alert("preencha o campo senha")
        pMensagem.setAttribute("class", "erro")
        return false
    }

    clearform()

})


