import React from 'react'

export default class Peso extends React.Component{
  render(){
    return(
      <div>
        <label>
          Peso
          <input type='text' value={this.props.p} onChange={(e)=>{this.props.sp(e.target.value)}}/>
        </label>
      </div>
    )
  }
}