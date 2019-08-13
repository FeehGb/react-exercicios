import React                    from 'react'
import ReactDOM                 from 'react-dom'
//import PrimeiroComponente     from './components/PrimeiroComponente'
//import { CompA, CompB }         from './components/DoisComponentes'
//import MultiploElements         from './components/MultiploElements'
//import Familia                    from './components/Familia'
//import Membro                     from './components/Membro'
//import ComponeteComFuncao from './components/ComponenteComFuncao'
//import Pai from './components/Pai'
//import ComponenteDeClasse from './components/componenteDeClasse'
import Contador from './components/Contador'

const elemento = document.getElementById("root")
ReactDOM.render (
    <div>
        <Contador numero={0} />
        {/* <ComponenteDeClasse valor="teste" /> */}
        {/* <Pai /> */}
        {/* <ComponeteComFuncao />
        
         */}
        
        {/* <Familia sobrenome="Basilio"> 

            <Membro nome="Felipe" />
            <Membro nome="Ryan" />
        </Familia> */}
        {/* <MultiploElements />
        <CompA valor="Ola eu sou A"/>
        <CompB valor="Ola eu sou B"/> */}
        {/*< PrimeiroComponente value="teste" />,  */}
    </div> ,elemento )