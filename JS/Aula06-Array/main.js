//Array Unidimencional: em apenas uma linha 
var numeros = [2, 4, 6, 8, 10, 12, 14] 
    console.log(numeros)
    console.log(numeros[4]) //Acessando o número 10 que está na posição 4

    console.clear()


    //Alterando valor 8
    console.log("Antes: " + numeros)
    numeros[3] = "Tabuada do dois"
    console.log("Depois: " + numeros)

    console.clear()


//Array Bidimencional: com linhas e colunas
var matrix = [
    ["ICarly, 2011, 10"],
    ["Os Fet de EverlyPlace, 2009, 10"],
    ["Doug, 1999, 8.7"]
]
    console.log(matrix)
    console.log(matrix[0][2]) //Acessando a nota 10 - Linha 0 e o numérico da posição 2
    console.log(matrix[2][1]) //Acessando o ano 1999 - Linha 2 e numérico da posição 1

    console.clear()


    //Alterando ano 1999
    console.log("Antes: " + matrix) 
    matrix[2][1] = 1800
    console.log("Depois: " + matrix)

    console.clear()


//Convertendo Array em String - Método to.String 
    var numArray1 = [4, 8, 12, 16, 20, 24] //Mostrado no console dessa forma (númerico) 
    console.log(numArray1)
    let receba = numArray1.toString() //Transformando o númerico em string (texto), sem colchetes - Note que a cor dos textos mudam 
    console.log(receba)

    console.clear()


//Método Join
var numArray2 = [5, 10, 15, 20, 25, 30]
let testeJoin = numArray2.join(" - ") //Igual ao método anterior e altera símbolo para separar 
console.log(testeJoin)

console.clear


//Propriedade Lenght - Retorna o tamanho do Array 
var numArray3 = [3, 6, 9, 12, 15, 18]
console.log(numArray3.length)

console.clear

//Método Pop - Para retirar o último elemento (Ex: Lista de 10 selecionados, se houver o 11 ele elimina)
var numArray4 = ['Iris', 'Fernanda', 'Eduardo', 'Anna', 'João', 'Duda']
let retiraUltimoElemento = numArray4.pop() //Retira o último elemento (Duda)
console.log(retiraUltimoElemento) 
console.log(numArray4) 

console.clear()

//Método Push - Adicionando mais um elemento
var numArray5 = ['Preto', 'Rosa', 'Azul', 'Branco', 'Cinza', 'Lilás']
let novaInfo = numArray5.push("Verde")
console.log(numArray5)
console.log(novaInfo)

console.clear

//Metódo Shift - Remove o elemento do início do array
var numArray6 = [6, 12, 18, 24, 30, 36 ]
let retirandoelemento1 = numArray6.shift()
console.log(numArray6)
console.log(retirandoelemento1)

console.clear()

//Método Unshift - Insere um elemento no início do array 
var numArray7 =  ['Uva', 'Mamão', 'Morango', 'Banana', 'Abacate', 'Limão']
let adicionandoelemento1 = numArray7.unshift('Kiwi')
console.log(numArray7)
console.log(adicionandoelemento1)