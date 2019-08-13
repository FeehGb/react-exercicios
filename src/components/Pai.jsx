import React from 'react'
import Filho from './Filho'

export default (props) => {
    const notificarSaida = lugar => alert(`Lugar liberado ${lugar}`) 
    
    return (
        <div>
            <Filho notificarSaida = {notificarSaida}/>
        </div>
    )
}
