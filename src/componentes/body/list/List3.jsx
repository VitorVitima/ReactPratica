import { useState } from "react";
import './css/style3.css'
function List3(){
    const [pa, setPa] = useState();
    const allPala = [];
    return(
        <div id="conteinerList3">
            <div>
                <input
                    type='text'
                    onChange={(e)=>setPa(e.target.value)}
                    
                />
                <button
                    onClick={()=>{
                        allPala.push(pa);
                        setPa('');
                    }}
                >Salvar</button>
            </div>
            <div>
                {pa}
            </div>
            <div>

            </div>
        </div>
    )
}
export default List3;