import React from 'react'
import ReactDOM from 'react-dom';
//import FamiliaBasilio from './components/FamiliaBasilio';
import Familia from './components/Familia';
import Membro from './components/Membro'

const elemento = document.getElementById('root')
ReactDOM.render( 
    <div>
        
        <Familia sobrenome="Basiliooo">
            <Membro nome="Felipe"    />
            {/*<Membro nome="Thiago"    />
            <Membro nome="Helias"    />
            <Membro nome="Doraci"    />
            <Membro nome="Alexandre" /> */}
            
        </Familia>
        {/* <Familia>
            
            <Membro nome="Helias"    sobrenome="Basilio"/>
            <Membro nome="Doraci"    sobrenome="Basilio"/>
            <Membro nome="Alexandre" sobrenome="Basilio"/>
            
        </Familia> */}
    </div>
    
    
    , elemento
    );
