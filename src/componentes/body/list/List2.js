import { useState } from "react";
function List2(){
    const [posi, setPosi] = useState(0);
    const palavras = [];
    const clickButton = () => {
        const inputValue = document.querySelector('input[type=text]');
        setPosi(inputValue.value);
        if(posi != 0){
            palavras.push(posi);
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
            </section>
        </>
    )
}
export default List2;