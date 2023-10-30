// Condicional If

//Prof bateu no aluno? - Exemplo

let professoraBateAluno = true
let professoraXingaAluno = false

//         true                &&(E)      true           == true - (Explicação- Resultado "true" porque E - && necessita que as duas validações sejam verdadeiras para que o resultado final seja TRUE)
if(professoraBateAluno == true && professoraXingaAluno == true){
    console.log("Professora demitida com sucesso!")
}

console.clear

//      true                   ||(OU)     false         == true - (Explicação- Resultado "true" porque OU - || quando recebe uma validação TRUE o resultado final independemente de quantos falses receba se torna TRUE)
if(professoraBateAluno == true || professoraXingaAluno == true){
    console.log("Professora demitida com sucesso!")
}

console.clear


// Condicional Else e Else if

// Validar Boatos - Exemplo

let teraComidaTOTVS = false

 // Forma explícita 
if(!teraComidaTOTVS == true){ //se  - ! (identifica de forma contrária, ou seja, se for "true" e eu usar "!" retornará "false" e dará "else")
    console.log("Não vou nem almoçar, alexsandro o brabo")
}else{ // senão
    console.log("Voce terá que almoçar")
}

console.clear

//Forma implicita
if(!teraComidaTOTVS){ //se - implicita
console.log("Não vou nem almoçar, alexsandro o brabo")
}else{ // senão
    console.log("Voce terá que almoçar")
}

//Numeros
let numero = 11
if(numero % 2 == 0){
    console.log("O número " + numero + "é par ") //Concatenação 1
}else{
    console.log(`O numero ${numero} é impar`) // Concatenação 2 - ${numero} = Template String - Diferente do sinal de soma
}

console.clear

let morangoMaduro = null // vazio

if(morangoMaduro == true){
    console.log("Pode comer")
}else if(morangoMaduro == false){
    console.log("Não come")
}else{
    console.log("Seu morango está mofado")
}

console.clear

let fase2 = 70
let fase3 = false
let inscrição = true

if(inscricao == true){
    console.log("Parabens voce está na fase 2")
    if(fase2 >= 70){
        console.log("Questionário de Lógica e Leitura")
    }else if(fase2 >=
         65 || fase2 <= 69){
        console.log("Voce terá uma segunda chance")
    }else{
        console.log("Voce não passou na fase 2")
    }
}

console.clear







