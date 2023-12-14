/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = geraNumeroAleataorio();
let tentativas = 1;

function geraNumeroAleataorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return geraNumeroAleataorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function verificaChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou, parabéns.');
        exibirTextoNaTela('p', mensagemTentativa);
        ativarBotao();
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número que você chutou é maior que o número secreto');
        } else{
            exibirTextoNaTela('p', 'O número que você chutou é menor que o número secreto');
        }
        tentativas++;
        limparCampo()
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function ativarBotao(){
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function reiniciarJogo(){
    numeroSecreto = geraNumeroAleataorio();
    limparCampo();
    tentativas = 1;
    exibeMensagemIncial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);   
}

function exibirTextoNaTela(parametro, texto){
    let tag = document.querySelector(parametro);
    tag.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {Rate: 1.2})
}

function exibeMensagemIncial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


exibeMensagemIncial();
console.log(numeroSecreto);
/*
function calculaImc(altura, peso){
    let imc = peso / (altura * altura);
    return console.log(`Seu IMC é ${imc.toFixed(2)}`);
}

function calculaFatorial(numero){
    let fatorial = 1;
    while(numero > 0){
        fatorial = fatorial * numero;
        numero--;
    }
    return console.log(fatorial);
}

function conversor(valor){
let cotacao = 4.80;
let vlConvertido;

vlConvertido = valor * cotacao;

return console.log(`O valor R$${valor.toFixed(2)} convertido em dolar é de $${vlConvertido.toFixed(2)}`);
}

function tabuada(numero){
    let aux = 1;
    let multiplicacao = 0;
    for(aux; aux < 10; aux++){
        multiplicacao = numero * aux;
        console.log(`${numero} * ${aux} = ${multiplicacao}`);
    }
}



calculaImc(1.65, 73);
calculaFatorial(8);
conversor(5.00);
tabuada(8);*/