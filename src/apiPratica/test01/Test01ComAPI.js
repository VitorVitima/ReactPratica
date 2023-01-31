import React from "react";
import axios from 'axios';
class Dados extends React.Component{
    state = {
        dados: []
    }
    componentDidMount(){
        axios.get('https://MyFirstAPI.ai-se-fosse-o-p.repl.co')
            .then(res=>{
                this.setState({dados: res.data})
            })
    }
    render(){
        return(
            <ul>  
                {
                    this.state.dados.map((el)=>{
                        return (
                                <li key={el.id}>
                                    <strong>{el.nome}</strong> 
                                    tem <strong>{el.idade}</strong> e 
                                    mora em <strong>{el.estado}</strong>
                                </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default Dados;