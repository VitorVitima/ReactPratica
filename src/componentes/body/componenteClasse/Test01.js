import React from 'react';

class TestClasse extends React.Component{
    constructor(props){
        super(props);
        this.nome = props.nome;
        this.idade = props.idade;
        this.sexo = props.sexo;
    }
    render(){
        return(
            <>
                <h1>Slapp</h1>
                <h2>Seja bem-vindo {this.nome}, de {this.idade} anos.</h2>
            </>
        )
    }
}

export default TestClasse;