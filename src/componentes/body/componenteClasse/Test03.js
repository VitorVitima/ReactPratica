import React, {useState} from 'react';
import './css/test03.css';
class class03 extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            light: false,
            door: false,
            color: '#619EFA'
        }
    }
    switchColorButton(){
        return this.state.light?'on':'off';
    }
    onOffLight(){
        this.setState({light: !this.state.light});
    }
    render(){
        return(
            <div id='allHouse' style={{backgroundColor: this.state.color}}>  
                <div id="light">
                    <p>
                        Esta {this.state.light? 'Ligada':'Desligada'}
                    </p>
                    <button
                        id={this.switchColorButton()}
                        onClick={()=>this.onOffLight()}
                    >{this.state.light?'Off':'On'}</button>
                </div>
                <div id="colorWall">
                    <p>
                        As paredes são
                    </p>
                    <input
                        type='color'
                        value={this.state.color}
                        onChange={(e)=>this.setState({color: e.target.value})}
                        />
                </div>
            </div>
        )
    }
}
export default class03;