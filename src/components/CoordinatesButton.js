// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component{
 getCoordinates = (e)=>{
   ler coordArr= [e.clientX, e.clientY]
   
 }

  render(){
    return(
      <button onClick={this.getCoordinates}>get Coordinates</button>
    );
  }
}
