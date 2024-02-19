// Função para exibir o texto na tela
function exibirTextoNaTela(mensagem) {
    // Seleciona o elemento HTML com o id 'textoResultado'
    let textoResultado = document.querySelector('#textoResultado');
    // Atualiza o conteúdo do elemento com a mensagem fornecida
    textoResultado.innerHTML = mensagem ;
}

// Função para codificar o texto usando o cifrador de César
function codificarTexto() {
    // Obtém o texto da caixa de entrada com o id 'textoPrincipal'
    let mensagem = document.querySelector('#textoPrincipal').value;
    // Inicializa o índice para percorrer a mensagem
    x=0;
    // Variável para armazenar o texto codificado
    let mensagemcod = '';
    // Loop para percorrer cada caractere da mensagem
    while(mensagem[x])  {
        // Obtém o código ASCII do caractere e o aumenta em 3 para codificar
        let ascii = mensagem[x].charCodeAt();
        ascii+=3;
        // Concatena o caractere resultante à mensagem codificada
        mensagemcod = mensagemcod + String.fromCharCode(ascii);
        // Move para o próximo caractere
        x++;
    } 
console.log(mensagemcod);
// Chama a função para exibir o texto na tela
exibirTextoNaTela(mensagemcod);

}

// Função para decodificar o texto usando o cifrador de César
function decodificarTexto() {
    // Obtém o texto da caixa de entrada com o id 'textoPrincipal'
    let mensagem = document.querySelector('#textoPrincipal').value;
    // Inicializa o índice para percorrer a mensagem
    x=0;
    // Variável para armazenar o texto decodificado
    let mensagemcod = '';
    // Loop para percorrer cada caractere da mensagem
    while(mensagem[x])  {
        // Obtém o código ASCII do caractere e o diminui em 3 para decodificar
        let ascii = mensagem[x].charCodeAt();
        ascii-=3;
        // Concatena o caractere resultante à mensagem decodificada
        mensagemcod = mensagemcod + String.fromCharCode(ascii);
        // Move para o próximo caractere
        x++;
    } 

console.log(mensagemcod);
// Chama a função para exibir o texto na tela
exibirTextoNaTela(mensagemcod);

}

// Função para copiar o texto resultado para a área de transferência
function copiarTexto() {
    // Seleciona o elemento HTML com o id 'textoResultado'
    let textoCopiado = document.getElementById("textoResultado");
    // Seleciona todo o texto na área de resultado
    textoCopiado.select();
    // Define a seleção para cobrir todo o texto
    textoCopiado.setSelectionRange(0, 99999)
    // Executa o comando de cópia
    document.execCommand("copy");
}