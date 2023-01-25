import React from 'react';
class Test02 extends React.Component{
    constructor(props){
        super(props);
        this.v1 = 0;
        this.state = {
            ligado: false,
            marca: 'Ford',
            estado: 'Novo',
            velocidade: 0
        }
        this.acelerar = this.acelerar.bind(this);
        this.estado = this.setEstado.bind(this);
    }
    onOff(){
        return this.state.ligado?'Ligado':'Desligado';
    }
    desligarLigar(){
        return this.state.ligado?'Desligar':'Ligar';
    }
    onOffMotor(){
            this.setState({ligado: !this.state.ligado, velocidade: 0});
    }
    setEstado(){
        if(this.state.ligado){
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
    acelerar(){
        this.setState(
            ()=>({velocidade: this.state.velocidade + this.props.speed})
        )
        /*
        this.setState(
            function (){
                return {velocidade: this.state.velocidade + this.props.speed}
            }
        )
    */
    }
    render(){
        return(
            <>
                <h1>Carro: Dados</h1>
                <p>Marca: {this.state.marca}</p>
                <p>Motor: {this.onOff()}</p>
                <p>Estado: {this.state.estado}</p>
                <p>Velocidade: {this.state.velocidade} km/h</p>
                <button
                    onClick={()=>this.onOffMotor()}
                >{this.desligarLigar()}</button>
                <button
                    onClick={this.estado}
                >Usar Carro</button>
                <button
                    onClick={this.acelerar}
                >Acelerar</button>
            </>
        )
    }
}
export default Test02;