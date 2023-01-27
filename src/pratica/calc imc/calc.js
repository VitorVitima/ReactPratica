import React, {useState} from 'react';
class Calc extends React.Component{
    constructor(){
        this.state = {
            peso: 0,
            altura: 0,
        }
        this.r = Number(this.state.peso) / (Number(this.state.altura) * 2);
    }
    resultado(){
        if (String(this.r) == 'NaN'){
            return 0;
        } else{
            return this.r.toFixed(2);
        }
    }
    render(){
        return(
            <>
                <div id='pesoInputs'>
                    <label>Informe seu peso: </label>
                    <input type='number' onChange={(e)=>this.setState({peso: e.target.value})}/>
                </div>
                <div id='alturaInputs'>
                    <label>Informe sua altura: </label>
                    <input type='number' onChange={(e)=>this.setState({altura: e.target.value})}/>
                </div>
                <div id='result'>
                    <span>Resultado: {this.resultado()}</span>
                </div>
            </>
        )
    }
}
export default Calc;