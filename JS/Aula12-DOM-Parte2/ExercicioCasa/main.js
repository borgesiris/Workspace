const botoes = document.querySelectorAll('.B_12')

botoes.forEach(botao => {
    botao.style.border = '2px solid #D9BC66';
    botao.style.padding = '.5rem';
    botao.style.backgroundColor = '#BFBFBF';
    botao.style.margin = '.7rem';
});

function calcularTabuada() {
  
    const numero = prompt('Informe um número:');


    if (numero !== null && numero !== '') {
  
        const numeroInteiro = parseInt(numero);

        if (!isNaN(numeroInteiro)) {
      
            const ul = document.createElement('ul');

            for (let i = 1; i <= 10; i++) {
                const li = document.createElement('li');
                li.textContent = `${numeroInteiro} x ${i} = ${numeroInteiro * i}`;
                ul.appendChild(li);
            }

            document.body.appendChild(ul);
        } else {
            alert('Por favor, informe um número válido.');
        }
    }
}