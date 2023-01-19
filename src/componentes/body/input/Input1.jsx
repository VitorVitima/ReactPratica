import './css/style1.css';
import { useState } from 'react';
function Input1(){
    const [nome, setNome] = useState()
    return(
        <div>
            <label>: </label>
            <input
                type='text'
                name='input1'
                value={nome}
                onChange={(e)=>setNome(e.target.value)}
            />
            <p>
                {nome}
            </p>
        </div>
    )
}

export default Input1;