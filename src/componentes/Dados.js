import React from "react";

export default function Dados(props) {
    let n1= 10
    let n2= 20
    return (
        <section>
            <p>Nome: {props.nome()} </p>
            <p>Idade: {props.idade} </p>
            <p>Profissão: {props.profissao} </p>
            <p>{'A soma de ' + n1 + ' e ' + n2 + ' é ' + props.somar(n1, n2)}</p>
        </section>
    )
}