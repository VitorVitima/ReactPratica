import React, {useState, useEffect} from 'react';
import Lines from './LinhasDoGame.js';
import AcabouGame from './acabouEReset.js';
const arrayBoxs = [['', '', ''],['', '', ''], ['', '', '']]
function JogoDaVelha(){
    const [game, setGame] = useState(true)
    const [acabou, setAcabou] = useState('')
    const limparArray = () => {
        for(let v1 = 0; v1 < 3; v1++){
            arrayBoxs[v1] = ['', '', '']
        }
    }
    const rolandoOuN = () =>{
        if(acabou == ''){
            return (
                <Lines 
                    setGame={setGame} 
                    arrayBox={arrayBoxs} 
                    game={game} 
                    setAcabou={setAcabou}
                ></Lines>    
            )
        } else if(acabou == -1 || acabou == 1){
            return(
                <AcabouGame
                    acabou={acabou}
                    setAcabou={setAcabou}
                    limparArray={limparArray}
                >
                </AcabouGame>
            )
        }
    }
    useEffect(()=>{
        let linesbolas = 0;
        for(let v1=0; v1 < 3;v1++){
            if(arrayBoxs[v1][0] === true && arrayBoxs[v1][1] === true && arrayBoxs[v1][2] === true){
                linesbolas++
            } else if(arrayBoxs[v1][0] === false && arrayBoxs[v1][1] === false && arrayBoxs[v1][2] === false){
                linesbolas--
            }
            if(arrayBoxs[0][v1] === true && arrayBoxs[1][v1] === true && arrayBoxs[2][v1] === true){
                linesbolas++
            } else if(arrayBoxs[0][v1] === false && arrayBoxs[1][v1] === false && arrayBoxs[2][v1] === false){
                linesbolas--
            }
        }
        if(arrayBoxs[0][0] === true && arrayBoxs[1][1] === true && arrayBoxs[2][2] === true){
            linesbolas++
        } else if(arrayBoxs[0][2] === true && arrayBoxs[1][1] === true && arrayBoxs[2][0] === true){
            linesbolas++
        }
        if(arrayBoxs[0][0] === false && arrayBoxs[1][1] === false && arrayBoxs[2][2] === false){
            linesbolas--
        } else if(arrayBoxs[0][2] === false && arrayBoxs[1][1] === false && arrayBoxs[2][0] === false){
            linesbolas--
        }
        setAcabou(linesbolas)
    },[game])
    return(
        <>
            {rolandoOuN()}
        </>
    )
}
export default JogoDaVelha;