import React from 'react'

export default class ResultadoIMC extends React.Component{
  render(){
    return(
      <div>
        <p>Resultado: {this.props.r.toFixed(2)}</p>
      </div>
    )
  }
}