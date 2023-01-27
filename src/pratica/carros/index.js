import React, {useState} from 'react';
import Es1 from './carrosRegistrados/Esport1.js';
import Es2 from './carrosRegistrados/Esport2.js';
import Su1 from './carrosRegistrados/SUV1.js';
import Su2 from './carrosRegistrados/SUV2.js';
import Uti1 from './carrosRegistrados/Utilitario1.js';
import Uti2 from './carrosRegistrados/Utilitario2.js';
import './css/style.css';
function Carros(){
    const [use, setUse] = useState('');
    const valueUse = (e) => {
        setUse(e.target.value);
    }
    const cars ={esporte: ()=>{
                return(
                    <>
                        <Es1></Es1>
                        <Es2></Es2>
                    </>
                )
            },
            suv: ()=>{
                return(
                    <>
                        <Su1></Su1>
                        <Su2></Su2>
                    </>
                )
            },
            utilitario: ()=>{
                return(
                    <>
                        <Uti1></Uti1>
                        <Uti2></Uti2>
                    </>
                )
            }
        }
    const funTbody=()=>{
        if(use == 'all' || use == ''){
            return(
                <>
                    {cars.esporte()}
                    {cars.suv()}
                    {cars.utilitario()}
                </>
            )
        } else if (use == 'SUV'){
            return(
                <>
                    {cars.suv()}
                </>
            )
        } else if (use == 'Esporte'){
            return (
                <>
                    {cars.esporte()}
                </>
            )
        } else if (use == 'Utilitario'){
            return(
                <>
                    {cars.utilitario()}
                </>
            )
        }
    }
    return(
        <div id='allDados'>
            <div id='inputs'>
                <label>Digite uma categoria</label>
                <input type='text' value={use} onChange={(e)=>valueUse(e)}/>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Preço</th>
                        <th>Modelo</th>
                    </tr>
                </thead>
                <tbody>
                    {funTbody()}
                </tbody>
            </table>
        </div>
    )
}
export default Carros;