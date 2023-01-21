import { useState } from "react";
import './css/style2.css';
function Input2(){
    const [form, setForm] = useState({'nome':'', 'idade':'', 'faculdade':''});
    return(
        <>
            <div>
                <div id="nomeInput2">
                    <label>Nome: </label>
                    <input type='text' onChange={(e)=>setForm(e.target.value).nome}></input>
                </div>
                <div id="idadeInput2">
                    <label>Idade: </label>
                    <input type="number"
                    
                    />
                </div>
                <div id="faculdadeInput2">
                    <label>Faculdade: </label>
                    <input
                        type='text'
                    >
                    </input>
                </div>
                <p>
                    <span>
                        Seu nome é {form.nome}
                    </span>
                    <span>
                        Sua idade é {form.idade}
                    </span>
                    <span>
                        Sua faculdade é {form.faculdade}
                    </span>
                </p>
            </div>
        </>
    )
}
export default Input2;