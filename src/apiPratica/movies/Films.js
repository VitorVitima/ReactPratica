import './css/styleForFilms.css'
function Films(props){
    return(
        <div className='boxFilms'>
            <div className='imgsDiv'>
                <img src={props.img}></img>
            </div>
            <div className='titulosDiv'>
                <span>{props.titulo}</span>
            </div>
            <div id='resumoDiv'>
                <span>{props.resumo}</span>
            </div>
        </div>
    )
}
export default Films;