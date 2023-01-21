import {useState} from 'react';
function Input3(){
    const [pala, setPala] = useState(['', '', '']);
    return(
        <>
            <div>
                <input
                    type='text'
                    onChange={(e)=>setPala(e.target.value)}
                >
                </input>
                <p>
                    {console.log(pala.length)}
                </p>
            </div>
        </>
    )
}
export default Input3;