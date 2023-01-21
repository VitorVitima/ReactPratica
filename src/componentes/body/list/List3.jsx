import { useState } from "react";
import './css/style3.css';
function List3(){
    const [pa, setPa] = useState();
    const [listV, setListV] = useState(false);
    const allPala = [];
    const palaSal = () => {
        if(listV){
            return(
                <li>
                    wkdkwm
                </li>
            )
        }
    }
    return(
        <div id="conteinerList3">
            <div id="inputsTag">
                <input
                    type='text'
                    onChange={(e)=>{
                        setPa(e.target.value);
                        listV(false)
                    }}
                />
                <button
                    onClick={()=>{
                        allPala.push(pa);
                        setPa('');
                        setListV(true);
                        console.log(allPala)
                    }}
                >Salvar</button>
            </div>
            <div id="paTag">
                {pa}
            </div>
            <div>
                
            </div>
        </div>
    )
}
export default List3;