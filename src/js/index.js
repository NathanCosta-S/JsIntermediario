const campos = document.querySelectorAll(".input-text");

function validarFormulario() {

    campos.forEach(function (campo) {
        if (campo.value.trim() === "") {

            campo.classList.remove("campo-preenchido");
            campo.classList.add("campo-nao-preenchido");

            const mensagemErro = campo.nextElementSibling;

            if (!mensagemErro || mensagemErro.className !== "mensagem-erro") {
                const mensagem = document.createElement("span");
                mensagem.className = "mensagem-erro";
                mensagem.textContent = "Campo obrigatório";
                campo.parentNode.insertBefore(mensagem, campo.nextSibling);
            }

        } else {
            campo.classList.remove("campo-nao-preenchido");
            campo.classList.add("campo-preenchido");

            const mensagemErro = campo.nextElementSibling;
            
            if (mensagemErro && mensagemErro.className === "mensagem-erro") {
                campo.parentNode.removeChild(mensagemErro);
            }
        }
    });
}

