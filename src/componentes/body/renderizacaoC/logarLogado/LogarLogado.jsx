import { useState } from "react";
const Render = () => {
    const [log, setLog] = useState(false);
    const vf = va => va?'Logado':'Deslogado';
    const switchValue = va => va?setLog(false):setLog(true);
    const switchButtonValue = va => va?'Deslogar':'Logar';
    
    return(
        <>
            <p>
                {vf(log)}
            </p>
            <button onClick={()=>{switchValue(log)}}>{switchButtonValue(log)}</button>
        </>
    )
}

export default Render;