import { useState } from "react";

function ScreenColor(){
    const [c, setC] = useState()
    return(
        <>
            <input 
                type="color"
                onChange={(e)=>setC(e.target.value)}
            />
            <div
                style={{

                    backgroundColor: c
                }}
            >

            </div>
        </>
    )
}
export default ScreenColor;