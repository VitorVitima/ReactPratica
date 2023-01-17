import React from 'react';
import './css/style.css'

function sla(props) {
    console.log(props);
    const number1 = 10;
    const number2 = 5;
    return(
        <>
            <p>
                O {props.nome} é muito {props.cara}.
            </p>
            <p>
                {`A soma de ${number1} + ${number2} é igual a ${props.somar(number1, number2)}`}
            </p>
            <p>
                {props.timeSeconds()}
            </p>
        </>
    )
}

export default sla;