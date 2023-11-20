import './App.css';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Rodape from './components/Rodape';
import Titulo from './components/Título';

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
