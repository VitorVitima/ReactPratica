import React from 'react';
function AllButtons(props){
    const acClear = () => {
        props.setS('');
    }
    const concatenar = e => {
        if(e.target.getAttribute('class') == null){
            props.setVal(false);
            console.log(props.val);           
            return props.setS(props.s + e.target.value);
        } else if (props.val == false){
            props.setVal(true);
            return props.setS(props.s + e.target.value);
        }
    }
    const resultado = () => {
        return props.setS(eval(props.s));
    }   
    return(
        <>
            <input id='ac' onClick={()=>acClear()} type='button' value='AC'/>
            <input onClick={(e)=>concatenar(e)} type='button' value='(' className='col'/>
            <input onClick={(e)=>concatenar(e)} type='button' value=')' className='col'/>
            <input onClick={(e)=>concatenar(e)} type='button' value='/' className='operador' />
            <input onClick={(e)=>concatenar(e)} type='button' value='7'/>
            <input onClick={(e)=>concatenar(e)} type='button' value='8'/>
            <input onClick={(e)=>concatenar(e)} type='button' value='9'/>
            <input onClick={(e)=>concatenar(e)} type='button' value='*' className='operador' />
            <input onClick={(e)=>concatenar(e)} type='button' value='4'/>
            <input onClick={(e)=>concatenar(e)} type='button' value='5'/>
            <input onClick={(e)=>concatenar(e)} type='button' value='6'/>
            <input onClick={(e)=>concatenar(e)} type='button' value='-' className='operador' />
            <input onClick={(e)=>concatenar(e)} type='button' value='1'/>
            <input onClick={(e)=>concatenar(e)} type='button' value='2'/>
            <input onClick={(e)=>concatenar(e)} type='button' value='3'/>
            <input onClick={(e)=>concatenar(e)} type='button' value='+' className='operador' />
            <input onClick={(e)=>concatenar(e)} type='button' value='0'/>
            <input onClick={(e)=>concatenar(e)} type='button' value='.' className='operador' />
            <input onClick={()=>resultado()} id='iqual' type='button' value='='/>
        </>
    )   
}
export default AllButtons;