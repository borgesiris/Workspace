// Arrow function que chama o alertSucesso
const alertSucesso = () => {
    const mensagem = 'Mensagem gerada com sucesso';
    alert(mensagem);
    console.log(mensagem);
  }

  // Criação do objeto "notebook"
const notebook = {
    marca: "Dell",
    modelo: "Inspiron 15",
    processador: "Intel Core i5",
    memoriaRAM: "8GB",
    armazenamento: "256GB SSD"
  }
  console.log(notebook)  

  
//Função Anos para Dias
  function anosParaDias(anos) {
    const dias = anos * 365;
    return dias;
  }
  const anos = 5;
  const resultado = anosParaDias(anos);
  
  console.log(`${anos} anos são equivalentes a ${resultado} dias.`);