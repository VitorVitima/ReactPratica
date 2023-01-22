import React ,{ useState } from "react";
import Dados from './Dados.jsx';
import Resultado from './Resultado.jsx';
import './css/styleAll.css';
function Notas2(){
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [nota4, setNota4] = useState(0);
    const [nota5, setNota5] = useState(0);
    return(
        <>
            <Dados
                num='1' nota={nota1} setNota={setNota1} value={nota1}
            ></Dados>
            <Dados
                num='2' nota={nota2} setNota={setNota2} value={nota2}
            ></Dados>
            <Dados
                num='3' nota={nota3} setNota={setNota3} value={nota3}
            ></Dados>
            <Dados
                num='4' nota={nota4} setNota={setNota4} value={nota4}
            ></Dados>
            <Dados
                num='5' nota={nota5} setNota={setNota5} value={nota5}
            ></Dados>
            <div id="resultado">
                <Resultado
                    nota1={nota1}
                    nota2={nota2}
                    nota3={nota3}
                    nota4={nota4}
                    nota5={nota5}
                ></Resultado>
            </div>
        </>
    )
}
export default Notas2;