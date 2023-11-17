import React from "react";

function NomeAluno(props){
    return <h1>Tres, {props.name}, mulheres</h1>
}

const mensagem = () => {
    return <NomeAluno name= 'Ana, Iris, Vic'/>
}

export default mensagem;