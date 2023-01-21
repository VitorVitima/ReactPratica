import { useState } from "react";
import DadosNota from './Dados.js';
function Notas(){
    const [nota1, setNota1] = useState();
    const [nota2, setNota2] = useState();
    const [nota3, setNota3] = useState();
    const [nota4, setNota4] = useState();
    const [nota5, setNota5] = useState();
    return(
        <>
            <DadosNota></DadosNota>
        </>
    )
}
export default Notas;