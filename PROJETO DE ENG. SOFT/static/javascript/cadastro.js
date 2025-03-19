


const tipocadastro = document.querySelector("#tipocadastro");
const titulomoderacao = document.querySelector("#titulomoderacao");
const titulousuario = document.querySelector("#titulousuario");
const moderacaocadastro = document.querySelector("#moderacaocadastro");
const usuariocadastro = document.querySelector("#usuariocadastro");

tipocadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const selecionartipocadastro = document.querySelector("#selecionartipocadastro").value;
    if (selecionartipocadastro === 'moderacao'){
        titulomoderacao.style.display = 'block';
        moderacaocadastro.style.display = 'block';
        titulousuario.style.display = 'none';
        usuariocadastro.style.display = 'none';
        moderacaocadastro.scrollIntoView({behavior: 'smooth'})
       
    }else{
        titulomoderacao.style.display = 'none';
        moderacaocadastro.style.display = 'none';
        titulousuario.style.display = 'block';
        usuariocadastro.style.display = 'block';
        usuariocadastro.scrollIntoView({behavior: 'smooth'})
    }
} )

usuariocadastro.addEventListener('submit', (event) =>{
    event.preventDefault();
    const senha = document.querySelector("#senhausuario");
    const repetirsenha = document.querySelector("#repetirsenhausuario");
    const msgerro = document.querySelector("#msgerrousuario");
    
    if (senha.value !== repetirsenha.value){
        msgerrousuario.style.display = 'block';
        repetirsenha.style.background = 'red';
        senha.style.background = 'red';
        return false;
    }else{
        msgerrousuario.style.display = 'none';
        repetirsenha.style.background = 'white';
        senha.style.background = 'white';        usuariocadastro.submit();
        return true;
    }


})

moderacaocadastro.addEventListener('submit', (event) =>{
    event.preventDefault();
    const senha = document.querySelector("#senhamoderacao");
    const repetirsenha = document.querySelector("#repetirsenhamoderacao");
    const msgerro = document.querySelector("#msgerromoderacao");
    
    if (senha.value !== repetirsenha.value){
        msgerromoderacao.style.display = 'block';
        repetirsenha.style.background = 'red';
        senha.style.background = 'red';
        return false;
    }else{
        msgerrousuario.style.display = 'none';
        repetirsenha.style.background = 'white';
        senha.style.background = 'white';
        moderacaocadastro.submit();
        return true;
    }

    
})