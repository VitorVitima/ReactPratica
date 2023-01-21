import { useState } from "react";
import './css/style2.css';
function Input2(){
    const [form, setForm] = useState({'nome':'', 'idade':'', 'faculdade':''});
    const handForm = (e) => {
        if(e.target.getAttribute('id') == 'nome'){
            setForm({'nome':e.target.value, 'idade':form.idade, 'faculdade':form.faculdade});
        } else if(e.target.getAttribute('id') == 'idade'){
            setForm({'idade':e.target.value, 'nome':form.nome, 'faculdade':form.faculdade});
        } else if (e.target.getAttribute('id') == 'faculdade'){
            setForm({'faculdade':e.target.value, 'nome':form.nome, 'idade':form.idade});
        }
    }
    return(
        <>
            <div>
                <div id="nomeInput2">
                    <label>Nome: </label>
                    <input type='text' id="nome" onChange={(e)=>handForm(e)}></input>
                </div>
                <div id="idadeInput2">
                    <label>Idade: </label>
                    <input type="number" id="idade" onChange={(e)=>handForm(e)}/>
                </div>
                <div id="faculdadeInput2">
                    <label>Faculdade: </label>
                    <input type='text' id="faculdade" onChange={(e)=>handForm(e)}>
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