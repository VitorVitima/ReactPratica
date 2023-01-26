import React from 'react';
import Global from './varGlobais.js';
class Trash extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nome: Global.nome
        }
    }
    getNome(){
        alert(Global.nome);
    }
    render(){
        return(
            <>  
                <input
                    type='text'
                    value={this.state.nome}
                    onChange={(e)=>this.setState({nome: e.target.value})}
                />
                <button
                    onClick={()=>this.setNome()}
                >Trocar nome</button>
                {console.log(window.location)}
                {}
            </>
        )
    }
}
export default Trash;