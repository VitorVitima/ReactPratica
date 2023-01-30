import React from 'react';
import './css/styleJogoDaVelha.css';
function LinhasDoGame(props){
    
    function clickDiv(e){
        if(props.game.switchForm){
            e.target.children[0].className='boll'
            props.setGame({switchForm: false})
        } else {
            props.setGame({switchForm: true})
            e.target.children[0].className='triangle'
        }
    }
    return(
        <>
            <div id='conteinerJogoDaVelha'>
                <div id="row1">
                    <div id='box1' className='allBox' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                    <div id='box2' className='allBox' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                    <div id='box3' className='allBox' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                </div>
                
                <div id="row2">
                    <div id='box4' className='allBox' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                    <div id='box5' className='allBox' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                    <div id='box6' className='allBox' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                </div>
                
                <div id="row3">
                    <div id='box7' className='allBox' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                    <div id='box8' className='allBox' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                    <div id='box9' className='allBox' onClick={(e)=>clickDiv(e)}><div><div></div></div></div>
                </div>
            </div>
        </>
    )
}
export default LinhasDoGame;