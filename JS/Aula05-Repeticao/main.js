// Laço While - Enquanto : Valida primeiro para depois executar

//Incremento                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
let conta1 = 1
while(conta1 <= 10){ //true
    console.log(`O numero do conta1 é ${conta1}`)
    conta1++;
}

console.clear()

//Decremento
let conta2 = 10
while(conta2 >= 0){
    console.log(`O número do conta2 é ${conta2}`)
    conta2--;
}

console.clear()

//Do-While: Executa primeiro (uma única vez) antes de validar 

let conta3 = 1
do{
    // debugger - Pra o código, executa linha por linha e evita bug's
    console.log(`O número do conta3 é ${conta3}`)
    conta3++;
}while(conta3 <= 10)

console.clear()


//Laço For : Igual ao 'while' porém em uma única linha

//  inicialização    condição   incremento
for(let conta4 = 1; conta4 <=10; conta4++){
    console.log(`O número do conta4 é ${conta4}`)
}