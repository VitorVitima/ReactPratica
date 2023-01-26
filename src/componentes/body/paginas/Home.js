import React, {useState, useEffect} from 'react';
import Page1 from './p1.js';
import Page2 from './p2.js';
function Home(){
    const [page, setPage] = useState();
    const pagesFun = () => {
        if(page == 1){
            return(
                <Page1></Page1>
                )
        } else if (page == 2){
            return(
                <Page2></Page2>
                )
        } else{
            function clickButton(e){
                window.open(window.location.href += `?${e}`, '_self')
            }
            return(
                <>
                    <button
                        onClick={()=>clickButton(1)}
                        >Page 1</button>
                    <button
                        onClick={()=>clickButton(2)}
                        >Page 2</button>
                </>
            )
        }}
        useEffect(()=>{
            
            const swi = window.location.href.split('?')
            setPage(swi[1])
        })
    return(
        <>
            {pagesFun()}
            {console.log(window.location)}
        </>
    )
}
export default Home;