import React ,{ useState } from "react";
import Dados from './Dados.jsx';
import Resultado from './Resultado.jsx';
import './css/styleAll.css';
function Notas2(){
    const [nota, setNota] = useState({
        'nota1':0, 'nota2':0, 'nota3':0, 'nota4':0, 'nota5':0
    })
    return(
        <>
            <Dados
                num='1' setNota={setNota} allNotas={nota}
            ></Dados>
            <Dados
                num='2' setNota={setNota} allNotas={nota}
            ></Dados>
            <Dados
                num='3' setNota={setNota} allNotas={nota}
            ></Dados>
            <Dados
                num='4' setNota={setNota} allNotas={nota}
            ></Dados>
            <Dados
                num='5' setNota={setNota} allNotas={nota}
            ></Dados>
            <div id="resultado">
                <Resultado
                    nota1={nota.nota1}
                    nota2={nota.nota2}
                    nota3={nota.nota3}
                    nota4={nota.nota4}
                    nota5={nota.nota5}
                ></Resultado>
            </div>
        </>
    )
}
export default Notas2;