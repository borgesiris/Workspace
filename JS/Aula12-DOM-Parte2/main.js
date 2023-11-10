// Método getElementById - Modo comum de acessar um elemento HTML 
let paragrafo = document.getElementById('paragrafo01'); //Esse método retorna a referência do elemento através do atributo ID ou null (#)

paragrafo.style.color = 'purple';   
paragrafo.style.backgroundColor = 'yellow';
paragrafo.style.textAlign = 'center';
paragrafo.style.margin = '20px';


//Método getElementsByClassName - Pegue os elementos pelo nome da class (.)
let buscaClasse = document.getElementsByClassName('item')

     //1- Percorrendo posições, pois é um array
// buscaClasse[0].style.color = 'pink'
// buscaClasse[1].style.color = 'blue'
// buscaClasse[2].style.color = 'pink'
// buscaClasse[3].style.color = 'blue'


     //2- Percorrendo todos, olhando a posição e aplicando backgroundColor
//Ex: Percorra a lista, altere a posição e a cor do texto
for(let c = 0; c <=buscaClasse.length; c++){ //c = contador
//Colocando a cor nos itens 
    //buscaClasse[c].style.backgroundColor = 'pink' 
}

//Método getElementsByTagName - identifica e chama todas as tags que possui o mesmo nome 
let acessaParagrafos = document.getElementsByTagName('p')
console.log(acessaParagrafos) //Mostrar no console quantos paragráfos temos

for(let ap = 0; ap <=acessaParagrafos.length; ap++){ //ap - acessa paragrafo
  //acessaParagrafos[ap].style.color = 'purple'
}

//Método getElementsByName - Acessa o elemento pelo nome (name_item)
let acessaName = document.getElementsByName('name_item')
console.log(acessaName)
//Ex: Percorra o array e altere os itens de posição par 
//for(let f = 0; f<= acessaName.length; f++){
   // if(f % 2 == 0){
        //acessaName[f].style.color = 'blue'
   // }
//}


//O método remove() permite remover um elemento do DOM
let item2 = document.getElementById('item2');
item2.remove();
 
let lista02 = document.getElementById('lista02');
let item5 = document.getElementById('item5')

lista02.insertBefore(item2, item5.nextSibling)

//Alterar estilo da lista
let retiraEstilo = document.getElementById('lista01')
retiraEstilo.style.listStyle = 'none';