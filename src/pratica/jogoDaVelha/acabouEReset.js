import './css/fimJogoDaVelha.css';
function AcabouEReset(props){
    return(
        <div id='acabouGame'>
            <p>
                o {props.acabou < 1?'Bola':'Triangulo'} ganhou
            </p>
            <button
                onClick={()=>{
                    props.setAcabou('')
                    props.limparArray()
                }}
            >Reset</button>
        </div>
    )
}
export default AcabouEReset;