import { useState, useEffect } from "react";
import './css/styleForMovies.css'
import Films from "./Films";
function Movies(){
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=41aba6e648a3981632f1de417793465d&language=pt-br&page=1')
        .then((res)=>res.json())
        .then((json)=>setMovies(json.results))
    }, [movies])
    const allPopular = movies.map((el)=>{
        return(
            <Films
                titulo={el.title}
                data={el.data}
                img={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                resumo={el.overview}    
            >
            </Films>
        )
    })
    return(
        <div id="moviesConteiner">  
            {allPopular}
            {console.log(movies)}
        </div>
    )
}
export default Movies;