const alunos = [
    {
      nome: 'Ana',
      idade: 17,
      nota: 8,
      ano: "2°B"
    },
    {
      nome: 'Marta',
      idade: 15,
      nota: 5,
      ano: "3°C"
    },
    {
      nome: 'Bruno',
      idade: 16,
      nota: 6,
      ano: "2°C"
    },
    {
      nome: 'Brenno',
      idade: 19,
      nota: 8,
      ano: "3°C"
    },
    {
      nome: 'Veronica',
      idade: 16,
      nota: 9,
      ano: "2°C"
    },
    {
      nome: 'Maria',
      idade: 14,
      nota: 4,
      ano: "1F"
    }
  ];
  
  // Retornar todo o array de objetos
  console.log(alunos);
  
  // Retornar todas as informações do aluno "Brunno"
  const alunoBrunno = alunos.find(aluno => aluno.nome === "Bruno");
  console.log(alunoBrunno);
  
  // Retornar apenas a nota da Maria
  const notaMaria = alunos.find(aluno => aluno.nome === "Maria").nota;
  console.log(notaMaria);
  
  // Retornar todo o array de objeto em formato JSON
  const alunosJSON = JSON.stringify(alunos);
  console.log(alunosJSON);
  