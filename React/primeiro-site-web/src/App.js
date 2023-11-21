
import './App.css';
import Cabecalho from './components/Cabeçalho';
import Principal from './components/Principal';
import Rodape from './components/Rodapé';
import Filme from './Img/OReiLeao.jpg'


function App() {
  return (
    <div className="App">
    <Cabecalho />
    <Principal />
    <img src={Filme} alt='Imagem O Rei Leão'></img>
    <Rodape />
  </div>
  );
}

   


export default App;

