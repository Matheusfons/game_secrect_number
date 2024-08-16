

// let titulo = document.querySelector("h1")
// titulo.innerHTML = "jogo do numero secreto"

// let paragrafo = document.querySelector("p")
// paragrafo.innerHTML = "escolha um numero entre 1 e 10"

let numero_limite = 10
let Lista_numeros_sorteados = []
let tentativa = 0
let numero_secreto = Gerar_numero_aleatorio()



function ExibirTextoNaTela(tag,texto)
{
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2})
}



function exibir_msg_inicial()
{

    ExibirTextoNaTela("h1","jogo do numero secreto")
    ExibirTextoNaTela("p","escolha um numero entre 1 e 10")


}

exibir_msg_inicial()

function verificarChute() 
{
    let chute = document.querySelector("input").value
    //console.log(chute == numero_secreto)
    //ExibirTextoNaTela("h1","acertou") = chute == numero_secreto ? "h1" , "acertou" :"h1","errou"
    tentativa ++

    if(chute == numero_secreto)
    {

        let palavretentativa = tentativa > 1 ? " tentativas" : " tentativa"

        ExibirTextoNaTela("h1","acertou")

        //ExibirTextoNaTela("p","você acertou numero secreto")

        let msgtentativa = "Você descobriu numerosecreto em " + tentativa + palavretentativa 

        ExibirTextoNaTela("p",msgtentativa)

        document.getElementById("reiniciar").removeAttribute("disabled")

        
    }
    else
    {
        if(chute > numero_secreto)
        {

            ExibirTextoNaTela("p", "numero secreto é menor")

        }
        else
        {

            ExibirTextoNaTela("p", "numero secreto é maior")

        }

        limpar_campo()

    }
    
} 

function reiniciar_jogo()
{
    numero_secreto = Gerar_numero_aleatorio()
    limpar_campo()
    tentativa = 0
    exibir_msg_inicial()
    document.getElementById("reiniciar").setAttribute("disabled",true)

}





function Gerar_numero_aleatorio() 
{
    let numero_escolhido = parseInt(Math.random()*numero_limite+1)
    let quatidade_de_elementos_na_lista = Lista_numeros_sorteados.length

    if (quatidade_de_elementos_na_lista==numero_limite) 
    {
        Lista_numeros_sorteados = [] 
        
    }

    if(Lista_numeros_sorteados.includes(numero_escolhido))
    {
       
        
        return Gerar_numero_aleatorio()
        
    }
    else
    {
        console.log(Lista_numeros_sorteados)
        Lista_numeros_sorteados.push(numero_escolhido)
        return numero_escolhido
    }
}


function limpar_campo()
{
    chute = document.querySelector("input")
    chute.value = "" 
}

