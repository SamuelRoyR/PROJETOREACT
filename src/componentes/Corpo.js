import React from "react";
import Dados from "./Dados";

export default function Corpo() {
    const nm=()=>{
        return 'Samuel'
    }
    const idd='24'
    const prof='TI'

    const somar=(v1,v2)=>{
        return v1+v2
    }

    return (
        <section>
            <h2>Curso de React</h2>
            <p>Este é o corpo da página</p>
            <p>Estamos aprendendo React</p>
                  <Dados 
                    nome= {nm}
                    idade= {idd} 
                    profissao= {prof}
                    somar= {somar}
                    />
        </section>
    );
}