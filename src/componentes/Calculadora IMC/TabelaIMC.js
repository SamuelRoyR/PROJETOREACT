// import React from 'react'


// export default function TabelaIMC(){
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

import React from 'react'


export default class TabelaIMC extends React.Component{
  render(){
    return(
        <table border='1' style={{borderCollapse:'collapse'}}>
            <thead>
              <tr>
                <th>
                  Classificação
                </th>
                <th>
                  IMC
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Abaixo do peso</td>
                <td>18.5</td>
              </tr>
              <tr>
                <td>Peso normal</td>
                <td>18.5 - 24.9</td>
              </tr>
              <tr>
                <td>Sobrepeso</td>
                <td>25 - 29.9</td>
              </tr>
              <tr>
                <td>Obesidade Grau 1</td>
                <td>30 e 34,9</td>
              </tr>
              <tr>
                <td>Obesidade Grau 2</td>
                <td>35 e 39,9</td>
              </tr>
              <tr>
                <td>Obesidade Grau 3</td>
                <td>40 ou mais</td>
              </tr>
            </tbody>
          </table>
    )
  }
}