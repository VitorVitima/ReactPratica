import React, {useState} from 'react';
import './css/style.css';
function Local(){
    const [dado, setDado] = useState();
    const saveDado = () => {
        localStorage.setItem('dadoLocal', dado);
    }
    function verDado(){
        alert(localStorage.getItem('dadoLocal'));
    }
    const removeDado = () => {
        localStorage.removeItem('dadoLocal');
    }
    return(
        <div>
            <label>{localStorage.dado}</label>
            <input
                type='text'
                onChange={(e)=>setDado(e.target.value)}
            />
            <button onClick={saveDado} >Salvar</button>
            <button onClick={verDado}>Ver Dado</button>
            <button onClick={removeDado}>Remover</button>
        </div>
    )
}
export default Local;