import './App.css';
import Body from './componentes/body/body.js'
import Header from './componentes/header/header.js'

function App() {
  const namaValue = 'Vitor';
  const caracteristica = 'mais ou menos';
  const somar = (n1, n2) => {
    return n1 + n2
  }
  const timeAtual = () => {
    setInterval(()=>{
      const data = new Date();
      const seconds = data.getSeconds;
      return seconds;
    }, 1000);
  }
  return (
    <>
      <Header />
      <Body 
        nome={namaValue} 
        cara={caracteristica} 
        somar={somar}
        timeSeconds={timeAtual}
      />
    </>
  );
}
export default App;
