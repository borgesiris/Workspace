//1. Método query.Selector: Identifica apenas o primeiro ID ou Class chamado 

//var paragrafo = document.querySelector('p');
//paragrafo.style.color = 'pink'
//console.log(paragrafo)


//2. Método query.SelectorAll: Identifica e percorre todos

//Ex: Acesse todos os parágrafos e a cor deles (classes ou nomes de tags)
var par = document.querySelectorAll('p')
for(var c = 0; c <= par.length; c++){
    //par[c].style.color = 'pink'
}

let parClasse = document.querySelector('p.exemplo')
parClasse.innerHTML = 'Alterando o terceiro texto - VIU'
parClasse.style.color = 'purple'



