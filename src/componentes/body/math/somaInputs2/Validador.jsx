import './css/styleVal.css';
function Validador(props){
    return(
        <div id='val'>
            <button
                onClick={(e)=>{
                    if(props.result > 60){
                        e.target.innerHTML = 'Passou'
                    } else{
                        e.target.innerHTML = 'Não passou'
                    }
                }}
            >Validar</button>
        </div>
    )
}
export default Validador;