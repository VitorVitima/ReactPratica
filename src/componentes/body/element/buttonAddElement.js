import { useState } from "react";
const Bae = () => {
    const [number, setNumber] = useState(0)
    function add() {
        console.log(number)
        return setNumber(number+1);
    }
    return(
        <>
            <section>
                <p>
                    {number}
                </p>
                <button onClick={add}>New</button>
            </section>
        </>
    )
}

export default Bae;