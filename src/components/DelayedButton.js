// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{
 delayedClick = (e)=>{
   
 }

  render(){
    return(
      <button onClick={this.delayedClick }>Delay button</button>
    );
  }
}

