import Validador from './Validador.jsx';
import './css/styleRes.css';
function Resultado(props){
    let result = Number(props.nota1) + Number(props.nota2) + Number(props.nota3) + Number(props.nota4) + Number(props.nota5)
    return(
        <>
            <div id='res'>
                {result}
            </div>
            <Validador
                result={result}
            ></Validador>
        </>
    )
}
export default Resultado;