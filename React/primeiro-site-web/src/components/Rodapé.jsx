// Rodape.js
import React from 'react';

const Rodape = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer style={{ textAlign: 'center', marginTop: '20px' }}>
      Iris Borges &copy; {anoAtual}
    </footer>
  );
}

export default Rodape;