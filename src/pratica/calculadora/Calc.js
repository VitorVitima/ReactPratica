import React, {useState} from 'react';
import Res from './Register.js';
import Button from './Buttons.js';
import './style/calcStyle.css';
import TrocaCor from './trocaCor.js';
function Calculadora (){
    const [register, setRegister] = useState('');
    const [validador, setVal] = useState(false);
    const [colors, setColors] = useState({
        all: 'calcTag',
        resultado: 'resultadoDiv',
        buttons: 'buttonsDiv'
    });
    return(
        <div id={colors.all}>
            <TrocaCor colors={colors} setColors={setColors} ></TrocaCor>
            <div id={colors.resultado}>
                <Res num={register}></Res>
            </div>
            <div id={colors.buttons}>
                <Button setS={setRegister} s={register} val={validador} setVal={setVal}></Button>
            </div>
        </div>
    )
}
export default Calculadora;