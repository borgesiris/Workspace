// Principal.js
import React from 'react';

const Principal = () => {
  const filmes = [
    'O Rei Leão',
    'A Culpa é das Estrelas',
    'Como Eu Era Antes de Você',
    'As Branquelas',
    'Divertidamente'
  ];

  return (
    <main style={{ backgroundColor: 'orange', color: 'purple', padding: '20px' }}>
      <p style={{ fontSize: '2rem' }}>
        Estou participando do curso de Programação Web no IOS com o objetivo de adquirir conhecimentos fundamentais na área de desenvolvimento front-end.
         Meu intuito é aprender a colaborar eficientemente em projetos de equipe, aprimorar minhas habilidades de comunicação e, a longo prazo, evoluir como desenvolvedor.
      </p>
      <ul>
        {filmes.map((filme, index) => (
          <li key={index}>{filme}</li>
        ))}
      </ul>
    </main>
  );
};


export default Principal;