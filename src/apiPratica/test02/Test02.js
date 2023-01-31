import React, {useEffect, useState} from 'react';

import axios from 'axios';
function Test02(){
    const [Dados, setDados] = useState([])
    useEffect(()=>{
        axios.get('https://MyFirstAPI.ai-se-fosse-o-p.repl.co')
            .then(e=>{
                setDados(e.data)
            })
    })
    return(
        <ul>
            {
                Dados.map((el)=>{
                    return(
                        <li key={el.id}>
                            {el.nome}
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default Test02;