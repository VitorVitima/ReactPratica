function Resultado(props){
    let sla = Number(props.nota1) + Number(props.nota2) + Number(props.nota3) + Number(props.nota4) + Number(props.nota5)
    const clickButton = () => {
        if(sla < 60){
            props.setPassou(false);
        } else {
            props.setPassou(true)
        }
    }
    return(
        <>
            <span>
                {sla}
            </span>
            <button
                onClick={()=>clickButton()}
            >Passei?</button>
            <span>
                {()=>props.setPassou?'Você passou.':'Você repetiu'}
            </span>
        </>
    )
}
export default Resultado;