import './App.css';
import Body from './componentes/body/body.js'
import Header from './componentes/header/header.js'

function App() {
  const namaValue = 'Vitor'
  const caracteristica = 'mais ou menos'
  return (
    <>
      <Header />
      <Body nome={namaValue} cara={caracteristica}/>
    </>
  );
}
export default App;
