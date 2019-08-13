import React from 'react'


const aprovados = ["Felipe" , "Roberto", "Zulian", "Anselmo"]

export default (props) => {
    const gerarItens = itens =>{
        return itens.map(item => <li>{item}</li>)
    }
    
    
    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}

