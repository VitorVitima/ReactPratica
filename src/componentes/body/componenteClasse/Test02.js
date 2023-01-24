import React from 'react';
class Test02 extends React.Component{
    constructor(props){
        super(props);
        this.v1 = 0;
        this.state = {
            ligado: false,
            marca: 'Ford',
            estado: 'Novo'
        }
    }
    onOff(){
        return this.state.ligado?'Ligado':'Desligado';
    }
    desligarLigar(){
        return this.state.ligado?'Desligar':'Ligar';
    }
    onOffMotor(){
        if(this.state.ligado == false){
            this.setState({ligado: true});
        } else{
            this.setState({ligado:false});
        }
    }
    setEstado(){
        if(this.state.ligado == true){
            this.v1 += 1;
            if(this.v1 < 6){
                this.setState({estado: 'seminovo'});
            } else if (this.v1 < 10){
                this.setState({estado: 'usado'});
            } else if (this.v1 > 10){
                this.setState({estado: 'velho'});
            }
        } else {
            alert('Carro desligado.');
        }
    }
    render(){
        return(
            <>
                <h1>Carro: Dados</h1>
                <p>Marca: {this.state.marca}</p>
                <p>Motor: {this.onOff()}</p>
                <p>Estado: {this.state.estado}</p>
                <button
                    onClick={()=>this.onOffMotor()}
                >{this.desligarLigar()}</button>
                <button
                    onClick={()=>this.setEstado()}
                >Usar Carro</button>
            </>
        )
    }
}
export default Test02;