import React, {useState} from 'react';
import Lines from './LinhasDoGame.js';
function JogoDaVelha(){
    const [game, setGame] = useState({
        switchForm: true,
    })
    return(
        <>
            <Lines setGame={setGame} game={game}></Lines>
        </>
    )
}
export default JogoDaVelha;