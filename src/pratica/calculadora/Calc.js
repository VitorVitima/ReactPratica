import React, {useState} from 'react';
import Res from './Register.js';
import Button from './Buttons.js';
import './style/calcStyle.css';
function Calculadora (){
    const [register, setRegister] = useState('12');
    const [validador, setVal] = useState(false);
    return(
        <div id='calcTag'>
            <div id='resultadoDiv'>
                <Res num={register}></Res>
            </div>
            <div id='buttonsDiv'>
                <Button setS={setRegister} s={register} val={validador} setVal={setVal}></Button>
            </div>
        </div>
    )
}
export default Calculadora;