function Resultado(props){
    let sla = Number(props.nota1) + Number(props.nota2) + Number(props.nota3) + Number(props.nota4) + Number(props.nota5)
    return(
        <>
            <span>
                {sla}
            </span>
        </>
    )
}
export default Resultado;