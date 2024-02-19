//Variaveis

function exibirTextoNaTela(mensagem) {
    let textoResultado = document.querySelector('#textoResultado');
    textoResultado.innerHTML = mensagem ;
}

function codificarTexto() {
    let mensagem = document.querySelector('#textoPrincipal').value;
    x=0;
    let mensagemcod = '';
    while(mensagem[x])  {
        let ascii = mensagem[x].charCodeAt();
        ascii+=3;
        mensagemcod = mensagemcod + String.fromCharCode(ascii);
        x++;
    } 
console.log(mensagemcod);
exibirTextoNaTela(mensagemcod);

}

function decodificarTexto() {
    let mensagem = document.querySelector('#textoPrincipal').value;
    x=0;
    let mensagemcod = '';
    while(mensagem[x])  {
        let ascii = mensagem[x].charCodeAt();
        ascii-=3;
        mensagemcod = mensagemcod + String.fromCharCode(ascii);
        x++;
    } 
console.log(mensagemcod);
exibirTextoNaTela(mensagemcod);

}

function copiarTexto() {
    let textoCopiado = document.getElementById("textoResultado");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}