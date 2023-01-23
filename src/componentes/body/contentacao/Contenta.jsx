import React from "react";
function Con(props){
    const loopFun = props.children.map((el)=>{
        return(
            <li>
                {el}
            </li>
        )
    })
    return(
        <section>
            {props.children}
            <ul>
                {loopFun}
            </ul>
        </section>
    )
}
export default Con;