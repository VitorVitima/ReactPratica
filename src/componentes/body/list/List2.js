import { useState } from "react";
function List2(){
    const [va, setVa] = useState('lol')
    const palavras = '';
    const clickButton = ()=>{
        const inputText = document.querySelector('input[type=text');
        if(va == true || va == 'lol'){
            palavras = inputText.value;
            setVa(false);
        }else{
            palavras = inputText.value;
            setVa(true);
        }
    }
    const listScreen = () => {
        if(va == true && va != 'lol'){
            return(
                <p>
                    {palavras}
                </p>
            )
        } else if(va == false && va != 'lol'){
            return(
                <p>
                    {palavras}
                </p>
            )
        }
    }
    return(
        <>
            <section>
                <input
                    type='text'
                />
                <input
                    type='button'
                    value='Salvar'
                    onClick={clickButton}
                />
                {listScreen}
            </section>
        </>
    )
}
export default List2;