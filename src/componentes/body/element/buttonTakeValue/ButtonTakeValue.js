import { useState } from "react";
import './style/style.css';
function ButtonTakeValue(){
    const [valueTag, setValueTag] = useState();
    function dobrar() {
        let inputValue = document.querySelector('input[type=number]')
        console.log(inputValue.value)
        if(valueTag == undefined){
            return setValueTag(inputValue.value)
        } else {
            return setValueTag(valueTag*2)
        }
    }
    return(
        <>
            <input
                type='number'
                placeholder='Number Value'
            />
            <p>
                {valueTag}
            </p>
            <button onClick={dobrar}>Dobrar</button>
        </>
    )
}

export default ButtonTakeValue;