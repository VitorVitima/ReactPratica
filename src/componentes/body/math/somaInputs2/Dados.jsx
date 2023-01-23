import './css/styleDados.css';
function Dados(props){
    const handlNota = (e)  => {
        if(props.num == 1){
            props.setNota({
                'nota1': e.target.value, 
                'nota2': props.allNotas.nota2,
                'nota3': props.allNotas.nota3,
                'nota4': props.allNotas.nota4,
                'nota5': props.allNotas.nota5
            })
        } else if (props.num == 2){
            props.setNota({
                'nota1': props.allNotas.nota1, 
                'nota2': e.target.value,
                'nota3': props.allNotas.nota3,
                'nota4': props.allNotas.nota4,
                'nota5': props.allNotas.nota5
            })
        } else if (props.num == 3){
            props.setNota({
                'nota1': props.allNotas.nota1, 
                'nota2': props.allNotas.nota2,
                'nota3': e.target.value,
                'nota4': props.allNotas.nota4,
                'nota5': props.allNotas.nota5
            })
        } else if (props.num == 4){
            props.setNota({
                'nota1': props.allNotas.nota1, 
                'nota2': props.allNotas.nota2,
                'nota3': props.allNotas.nota3,
                'nota4': e.target.value,
                'nota5': props.allNotas.nota5
            })
        } else if (props.num == 5){
            props.setNota({
                'nota1': props.allNotas.nota1, 
                'nota2': props.allNotas.nota2,
                'nota3': props.allNotas.nota3,
                'nota4': props.allNotas.nota4,
                'nota5': e.target.value
            })
        }
    }
    return(
        <>
            <div>
                <label>Nota {props.num}</label>
                <input
                    type='number'
                    onChange={(e)=>handlNota(e)}
                />
            </div>
        </>
    )
}
export default Dados;