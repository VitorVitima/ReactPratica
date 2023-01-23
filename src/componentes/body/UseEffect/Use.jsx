import React, {useState, useEffect} from 'react';
function UseEff(){
    const [num, setNum] = useState(0);
    useEffect(()=>console.log('Adicionou 1'))
    return(
        <div>   
            <p>
                {num}
            </p>
            <button 
                onClick={()=>setNum(num+1)}
            >
                Adicionar
            </button>
        </div>
    )
}
export default UseEff;