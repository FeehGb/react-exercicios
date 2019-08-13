import React, { Component } from 'react'


export default class componenteDeClasse extends Component {
    
    render() {
        return (
            <div>
                <h1>Ola Classe</h1>
                <h1>{this.props.valor|| 'padrao'}</h1>
            </div>
        )
    }
}
