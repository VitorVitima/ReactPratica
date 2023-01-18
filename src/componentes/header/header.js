import './css/style.css'
import Clock from './clock/clock.js'
import { useState } from 'react';

function headerFun() {
    return(
        <>
            <header>
                <Clock></Clock>
            </header>
        </>
    )
}

export default headerFun;