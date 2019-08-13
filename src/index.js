import React                    from 'react'
import ReactDOM                 from 'react-dom'
//import PrimeiroComponente     from './components/PrimeiroComponente'
//import { CompA, CompB }         from './components/DoisComponentes'
//import MultiploElements         from './components/MultiploElements'
import Familia                    from './components/Familia'
import Membro                     from './components/Membro'

const elemento = document.getElementById("root")
ReactDOM.render (
    <div>
        
        <Familia sobrenome="Basilio"> 

            <Membro nome="Felipe" />
            <Membro nome="Ryan" />
        </Familia>
        {/* <MultiploElements />
        <CompA valor="Ola eu sou A"/>
        <CompB valor="Ola eu sou B"/> */}
        {/*< PrimeiroComponente value="teste" />,  */}
    </div> ,elemento )