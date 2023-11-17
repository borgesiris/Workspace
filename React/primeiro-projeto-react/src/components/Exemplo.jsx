import React from "react";

let estilo = {listStyle: 'none', color: 'pink', fontSize: '50px', textAlign: 'center'};

const Exemplo = () => {
    return (
        <>
            <h1>Sexta-Feira Depressiva</h1>
            <p>Alunos que irão reprovar:</p>
            <ul style={estilo}>
                    {/* style={{listStyle:'none'}} */}
                <li>Maria Eduarda</li>
                <li>Anna Clara</li>
                <li>Leandro Jun</li>
                <li>o restante da sala</li>
            </ul>
        
        </>
    );
} 


export default Exemplo;

