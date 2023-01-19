function List() {
    const nomes = ['Henrique', 'Vitor', 'Taltinho', 'Fernando', 'Luiza'];
    function nomesList() {
        return(
            <>
                {nomes.map((el)=>{
                    return (
                        <li>
                            {el}
                        </li>
                    )
                })}
            </>
        )
    }
    return(
        <>
            <ul>
                {nomesList()}
            </ul>
        </>
    )
}

export default List;