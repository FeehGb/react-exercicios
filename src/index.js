import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './components/PrimeiroComponente'
import { CompA, CompB } from './components/DoisComponentes'
import MultiploElements from './components/MultiploElements'
const elemento = document.getElementById("root")
ReactDOM.render(
    <div>
        <MultiploElements />
        <CompA valor="Ola eu sou A"/>
        <CompB valor="Ola eu sou B"/>
        {/*< PrimeiroComponente value="teste" />,  */}
    </div> 
    
    ,
    
elemento)
   