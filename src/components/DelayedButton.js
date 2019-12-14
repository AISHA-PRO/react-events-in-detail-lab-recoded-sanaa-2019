// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{
 getCoordinates = (e)=>{
   ler coordArr= [e.clientX, e.clientY]
   this.props.onReceiveCoordinates(coordArr)
 }

  render(){
    return(
      <button onClick={this.onDelayedClick }>get Coordinates</button>
    );
  }
}

