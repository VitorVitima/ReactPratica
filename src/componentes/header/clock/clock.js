import { useState } from "react";
function Clock() {
    const [s, setS] = useState()
    const intervalo = () => {
        setInterval(()=>{
            const data = new Date().toLocaleTimeString();
            setS(data);
            return (s);
        }, 1000)
    }
    intervalo()
    return(
        <>
            <p>
                {s}
            </p>
        </>
    )
}
export default Clock;