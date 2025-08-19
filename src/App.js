import React, { useState } from 'react'
import Led from './componentes/Led'
export default function App(){
  const [ligado, setLigado]= useState(false)
  const cancelar=(obj)=>{
    return obj.preventDefault()
  }
  return(
    <>
    <Led ligado={ligado}setLigado={setLigado}/>
    <a
      href='http://youtube.com/xedss'
      target='_blank'
      onClick={(e)=>cancelar(e)}
    >
      youtube
    </a>
    </>
  )
}








































// import React from 'react'
// import './App.css'
// import Relogio from './componentes/Relogio'



// export default function App(){
//   const textoDestaque={
//     color:'#00f',
//     fontSize:'3em'
//   }


//   return (
//     <>
//     <section className='caixa'>
//       <Relogio/>
//       <h1 style={{color:'#f00', fontSize:'5em'}}>Curso de React</h1>  
//       <h2 style={textoDestaque}>Curso de React</h2>
//       <p className='texto'>Estamos aprendendo React</p>
//       <a href='https://www.google.com.br' target='_blank'rel="noreferrer">Google</a> 
//     </section>
//     </>
//   )
//   }
  
