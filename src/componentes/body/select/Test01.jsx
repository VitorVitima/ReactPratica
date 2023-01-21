import {useState} from 'react';
function Select01(){
    const [game, setGame] = useState()
    const optionSelected = () =>{
        const allOptions = [...document.querySelector('option')];
        allOptions.map((el)=>{
            if(el.selected == true){
                return setGame(el.value);
            }
        })
    }
    return(
        <>
            <select
                onClick={(e)=>{optionSelected()}}
            >
                <option value='Lol'>League of Legends</option>
                <option value='FF'>Free Fire</option>
                <option value='Dota2'>Dota 2</option>
                <option value='GOD'>God of War</option>
            </select>
            <div>
                O game selecionado é {game}
            </div>
        </>  
    )
}
export default Select01;