import React, {useState} from 'react';
import Res from './Register.js';
import Button from './Buttons.js';
function Calculadora (){
    const [register, setRegister] = useState('12')
    return(
        <>
            <div id='resultadoDiv'>
                <Res num={register}></Res>
            </div>
            <div id='buttonsDiv'>
                <Button setS={setRegister} s={register}></Button>
            </div>
        </>
    )
}
export default Calculadora;