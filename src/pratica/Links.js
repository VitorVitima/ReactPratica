import {Routes, Route, Link} from 'react-router-dom';
import CalcImc from './calc imc/Imc.js';
import Calc from './calculadora/Calc.js';
import Carros from './carros/index.js';
import JogoVelha from './jogoDaVelha/jogoDaVelha.js';
export default function LinksForPraticas() {
    return(
        <>
            <header
                style={{
                    height: '50px',
                    display: 'flex',
                    gap: '20px',
                }}
            >
                <Link to='calc_imc'>Calc IMC</Link>
                <Link to='calc'>Calc</Link>
                <Link to='carros'>Carros</Link>
                <Link to='jogo_da_velha'>Jogo da Velha</Link>
            </header>
            <main>
                <Routes>
                    <Route path='calc_imc' element={<CalcImc/>}></Route>
                    <Route path='calc' element={<Calc/>}/>
                    <Route path='carros' element={<Carros/>}/>
                    <Route path='jogo_da_velha' element={<JogoVelha/>}/>
                </Routes>
            </main>
        </>
    )
}