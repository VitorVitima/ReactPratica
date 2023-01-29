import './style/styleColorAll.css';

function TrocaCor(props){
    const buttonClick = (e) => {
        if(e.target.getAttribute('id')=='boll'){
            e.target.setAttribute('id', 'boll2');
            e.target.parentNode.setAttribute('id', 'conteinerBoll2');
        } else {
            e.target.setAttribute('id', 'boll');
            e.target.parentNode.setAttribute('id', 'conteinerBoll');
        }
        if(props.colors.all == 'calcTag'){
            props.setColors({
                all: 'calcTag2',
                resultado: 'resultadoDiv2',
                buttons: 'buttonsDiv2'
            });
        } else {
            props.setColors({
                all: 'calcTag',
                resultado: 'resultadoDiv',
                buttons: 'buttonsDiv'
            });
        }
    
    }
    return(
        <div id="conteinerBoll">
            <div id="boll" onClick={(e)=>buttonClick(e)} ></div>
        </div>
    )
}
export default TrocaCor;