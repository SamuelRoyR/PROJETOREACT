import React, {useState} from 'react'
import TabelaIMC from './componentes/TabelaIMC'
import Peso from './componentes/Peso'
import Altura from './componentes/Altura'
import Calcular from './componentes/Calcular'
import Resultado from './componentes/Resultado'
// const tabelaIMC=()=>{
//   return(
//     <table border='1' style={{borderCollapse:'collapse'}}>
//     <thead>
//       <tr>
//         <th>
//           Classificação
//         </th>
//         <th>
//           IMC
//         </th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>Abaixo do peso</td>
//         <td>18.5</td>
//       </tr>
//       <tr>
//         <td>Peso normal</td>
//         <td>18.5 - 24.9</td>
//       </tr>
//       <tr>
//         <td>Sobrepeso</td>
//         <td>25 - 29.9</td>
//       </tr>
//       <tr>
//         <td>Obesidade Grau 1</td>
//         <td>30 e 34,9</td>
//       </tr>
//       <tr>
//         <td>Obesidade Grau 2</td>
//         <td>35 e 39,9</td>
//       </tr>
//       <tr>
//         <td>Obesidade Grau 3</td>
//         <td>40 ou mais</td>
//       </tr>
//     </tbody>
//     </table>
//   )
// }

// const fpeso=(p,sp)=>{
//   return(
//     <div>
//       <label>
//         Peso
//         <input type='text' value={p} onChange={(e)=>{sp(e.target.value)}}/>
//       </label>
//     </div>
//   )
// }

// const faltura=(a,sa)=>{
//   return(
//     <div>
//       <label>
//         Altura
//         <input type='text' value={a} onChange={(e)=>{sa(e.target.value)}}/>
//       </label>
//     </div>
//   )
// }

// const fcalcular=(p,a,sr)=>{

//     const calc=()=>{
//       sr(p/(a*a))
//     }
//     return(
//       <div>
//         <button onClick={calc}>Calcular</button>
//       </div>
//     )
// }

// const fresultado=(r)=>{
//   return(
//     <div>
//       <p>Resultado: {r.toFixed(2)}</p>
//     </div>
//   )
// }

export default function App(){
  const [resultado, setResultado] = useState(0)
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)

  return (
    <>
      <Peso p={peso} sp={setPeso}/>
      <Altura a={altura} sa={setAltura}/>
      <Calcular p={peso} a={altura} sr={setResultado}/>
      <TabelaIMC/>
      <Resultado r={resultado}/>
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
  
