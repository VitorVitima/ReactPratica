import React, { useState } from "react";
import './style.css';
function SwitchColors() {
    const [c, setC] = useState(0);
    const colors ={
        green: 'green',
        red: 'red',
        black: 'black'
    }
    const mudarCor = () => {
        if(c==0){
            return colors.green;
        } else if(c==1){
            return colors.black;
        } else {
            return colors.red;
        }
    }
    const mudarC = () => {
        if(c == 0){
            setC(1);
        } else if(c==1){
            setC(2);
        } else {
            setC(0);
        }
    }
    return(
        <>
            <div style={{backgroundColor: mudarCor()}}>

            </div>
            <button
                onClick={()=>{mudarC()}}
            >Trocar cor</button>
        </>
    )
}

export default SwitchColors;