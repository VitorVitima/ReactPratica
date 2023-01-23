import './css/styleVal.css';
function Validador(props){
    return(
        <div id='val'>
                {props.result >= 60?'Aprovado':'Reprovado'}
        </div>
    )
}
export default Validador;