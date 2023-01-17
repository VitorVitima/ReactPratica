import React from 'react';
import './css/style.css'

function sla(props) {
    console.log(props)
    return(
        <>
            <p>
                O {props.nome} é muito {props.cara}.
            </p>
        </>
    )
}

export default sla;