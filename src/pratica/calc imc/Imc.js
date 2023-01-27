import React from 'react';
import Tabela from './Table.js';
import Calc from './calc.js';
import './style/imcStyle.css';
function Imc(){
    return(
        <div id='allImc'>  
            <Calc></Calc>
            <Tabela></Tabela>
        </div>
    )
}
export default Imc;