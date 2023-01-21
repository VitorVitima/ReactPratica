import { useState } from "react";
import DadosNota from './Dados.js';
function Notas(){
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [nota4, setNota4] = useState(0);
    const [nota5, setNota5] = useState(0);
    return(
        <div>
            <DadosNota
                nota1={nota1} setNota1={setNota1} num1='1'
                nota2={nota2} setNota2={setNota2} num2='2'
                nota3={nota3} setNota3={setNota3} num3='3'
                nota4={nota4} setNota4={setNota4} num4='4'
                nota5={nota5} setNota5={setNota5} num5='5'
            ></DadosNota>
        </div>
    )
}
export default Notas;