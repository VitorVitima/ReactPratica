import React from 'react';
function AllButtons(props){
    const acClear = () => {
        props.setS(0)
    }
    const contatenar = (e) => {
        return props.setS(props.register + e.target.value) //nao ta funcionando,  parei aqui
    }
    return(
        <>
            <input id='ac' onClick={()=>acClear()} type='button' value='AC'/>
            <input onClick={(e)=>contatenar(e)} type='button' value='('/>
            <input type='button' value=')'/>
            <input type='button' value='/'/>
            <input type='button' value='7'/>
            <input type='button' value='8'/>
            <input type='button' value='9'/>
            <input type='button' value='*'/>
            <input type='button' value='4'/>
            <input type='button' value='5'/>
            <input type='button' value='6'/>
            <input type='button' value='-'/>
            <input type='button' value='1'/>
            <input type='button' value='2'/>
            <input type='button' value='3'/>
            <input type='button' value='+'/>
            <input type='button' value='0'/>
            <input type='button' value='.'/>
            <input id='iqual' type='button' value='='/>
        </>
    )   
}
export default AllButtons;