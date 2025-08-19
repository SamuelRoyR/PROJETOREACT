import React from 'react'
import LedVerde from './imgs/ledverde.png'
import LedVermelho from './imgs/ledvermelho.png'
export default function Led(props){
  return(
    <>
        <img style={{width:'50px'}} src={props.ligado? LedVerde:LedVermelho} alt="Led Vermelho"/>
        <button onClick={() => props.setLigado(!props.ligado)}>
        {props.ligado?'Desligar':'Ligar'}
        </button>
    </>
  )
}
