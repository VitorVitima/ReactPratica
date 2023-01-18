import SwitchImg from './SwitchImgVisual.js'
import {useState} from 'react'
function SwitchConf() {
    const [si, setSi] = useState(true);
    return(
        <>
            <SwitchImg
                si={si}
                setSi={setSi}
            />
        </>
    )
}
export default SwitchConf;