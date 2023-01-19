import React from 'react';
import './css/style.css';
import Bae from './element/buttonAddElement.js';
import Btv from './element/buttonTakeValue/ButtonTakeValue.js';
import Render from './renderizacaoC/logarLogado/LogarLogado.jsx';
import Scolors from './renderizacaoC/switchColors/SwitchColors.jsx';
import List2 from './list/List2.js'
function Sla(props) {
    return(
        <>
            <Bae></Bae>
            <Btv></Btv>
            <Render></Render>
            <Scolors></Scolors>
            <List2></List2>
        </>
    )
}
export default Sla;