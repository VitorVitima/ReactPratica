import './style/style.css';
import BGreen from './imgs/buttonsGreen.jpg';
import BRed from './imgs/buttonsRed.jpg';
function SwitchImg(props){
    function RG(par) {
        return par? BGreen : BRed;
    }
    function onOff(par){
        if(par){
            return 'Desligar';
        } else {
            return 'Ligar';
        }
    }
    function clickSwitch(){
        props.si? props.setSi(false) : props.setSi(true);
    }
    return(
        <>
            <img
                src={RG(props.si)}
            />
            <button onClick={clickSwitch} >{onOff(props.si)}</button>
        </>
    )
}
export default SwitchImg;
