import './styleGeral.css';
import Resultado from './resultado.js';
function Dados(props){
    return(
        <>
            <div>
                <label>Nota {props.num1}:</label>
                <input 
                    type='number'
                    onChange={(e)=>props.setNota1(e.target.value)}
                />
            </div>
            <div>
                <label>Nota {props.num2}:</label>
                <input 
                    type='number'
                    onChange={(e)=>props.setNota2(e.target.value)}
                />
            </div>
            <div>
                <label>Nota {props.num3}:</label>
                <input 
                    type='number'
                    onChange={(e)=>props.setNota3(e.target.value)}
                />
            </div>
            <div>
                <label>Nota {props.num4}:</label>
                <input 
                    type='number'
                    onChange={(e)=>props.setNota4(e.target.value)}
                />
            </div>
            <div>
                <label>Nota {props.num5}:</label>
                <input 
                    type='number'
                    onChange={(e)=>props.setNota5(e.target.value)}
                />
            </div>
            <div id='resultado'>
                <Resultado
                    nota1={props.nota1}
                    nota2={props.nota2}
                    nota3={props.nota3}
                    nota4={props.nota4}
                    nota5={props.nota5}
                ></Resultado>
            </div>
        </>
    )
}
export default Dados;