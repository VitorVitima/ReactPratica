import React from 'react';
import './css/styleJogoDaVelha.css';
function LinhasDoGame(props){
    
    function clickDiv(e){
        const classTag = e.target.getAttribute('class').split(' ')
        const idTag = e.target.getAttribute('id')
        if(props.game){
            e.target.children[0].className='boll'
            props.setGame(false)
            if(idTag <= 3){
                props.arrayBox[0][classTag[1] - 1] = false;
            } else if(idTag <= 6){
                props.arrayBox[1][classTag[1] - 1] = false;
            } else{
                props.arrayBox[2][classTag[1] - 1] = false;
            }
            console.log(props.arrayBox)
        } else {
            e.target.children[0].className='triangle'
            props.setGame(true)
            if(idTag <= 3){
                props.arrayBox[0][classTag[1] - 1] = true;
            } else if(idTag <= 6){
                props.arrayBox[1][classTag[1] - 1] = true;
            } else{
                props.arrayBox[2][classTag[1] - 1] = true;
            }
            console.log(props.arrayBox)
        }
    }
    return(
        <>
            <div id='conteinerJogoDaVelha'>
                <div id="row1">
                    <div id='1' className='allBox 1' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                    <div id='2' className='allBox 2' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                    <div id='3' className='allBox 3' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                </div>
                
                <div id="row2">
                    <div id='4' className='allBox 1' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                    <div id='5' className='allBox 2' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                    <div id='6' className='allBox 3' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                </div>
                
                <div id="row3">
                    <div id='7' className='allBox 1' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                    <div id='8' className='allBox 2' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                    <div id='9' className='allBox 3' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                </div>
            </div>
        </>
    )
}
export default LinhasDoGame;