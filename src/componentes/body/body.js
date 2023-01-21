import React from 'react';
import './css/style.css';
import Bae from './element/buttonAddElement.js';
import Btv from './element/buttonTakeValue/ButtonTakeValue.js';
import Render from './renderizacaoC/logarLogado/LogarLogado.jsx';
import Scolors from './renderizacaoC/switchColors/SwitchColors.jsx';
import List3 from './list/List3.jsx';
import Sc from './screenColor/SC.jsx';
function Sla(props) {
    return(
        <>
            <List3></List3>
            <Bae></Bae>
            <Btv></Btv>
            <Render></Render>
            <Scolors></Scolors>
            <Sc></Sc>
        </>
    )
}
export default Sla;