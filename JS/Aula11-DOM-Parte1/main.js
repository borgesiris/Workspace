//Metodos DOM

//Criação da variável e criação do botão
let botao = document.createElement('BUTTON'); //varíavel para guardar a localização no html

//Acrescentando filho (botão na body)
document.body.appendChild(botao)

 //Adicionar texto no interior do filho (botao)
botao.innerHTML = 'Enviar';

//Etilizando botão 
botao.style.border = 'solid 2px black';

//Estilizando fundo da página
document.body.style.backgroundColor = 'purple' //Opção de criar uma variável 'let corpo = document.body' e chamar ela para estilizar
