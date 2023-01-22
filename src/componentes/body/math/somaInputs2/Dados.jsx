import './css/styleDados.css';
function Dados(props){
    return(
        <>
            <div>
                <label>Nota {props.num}</label>
                <input
                    type='number'
                    onChange={(e)=>props.setNota(e.target.value)}
                />
            </div>
        </>
    )
}
export default Dados;