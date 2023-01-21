import {useState} from 'react';
import './css.css'
function Select01(){
    const [game, setGame] = useState('League of Legends')
    const optionSelected = (e) =>{
        return setGame(e.target.value);
    }
    return(
        <section>
            <select
                onClick={(e)=>{optionSelected(e)}}
            >
                <option value='League of Legends'>League of Legends</option>
                <option value='Free Fire'>Free Fire</option>
                <option value='Dota 2'>Dota 2</option>
                <option value='God of War'>God of War</option>
            </select>
            <div id='divGames'>
                O game selecionado é {game}
            </div>
        </section>  
    )
}
export default Select01;