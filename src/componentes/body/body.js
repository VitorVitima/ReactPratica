import React from 'react';
import './css/style.css';
import Bae from './element/buttonAddElement.js';
import Btv from './element/buttonTakeValue/ButtonTakeValue.js';
import Render from './renderizacaoC/logarLogado/LogarLogado.jsx';
import Scolors from './renderizacaoC/switchColors/SwitchColors.jsx'
function Sla(props) {
    return(
        <>
            <Bae></Bae>
            <Btv></Btv>
            <Render></Render>
            <Scolors></Scolors>
        </>
    )
}
export default Sla;