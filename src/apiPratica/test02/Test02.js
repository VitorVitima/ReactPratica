import React, {useEffect, useState} from 'react';
function Test02(){
    const [Dados, setDados] = useState([])
    useEffect(()=>{
        fetch('https://MyFirstAPI.ai-se-fosse-o-p.repl.co')
         .then(api=>api.json())
         .then(api=>setDados(api))
    })
    return(
        <ul>
            {
                Dados.map((el)=>{
                    return(
                        <li key={el.id}>
                            {el.estado}
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default Test02;