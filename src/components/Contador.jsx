import React, { Component } from 'react'

export default class Contador extends Component {
    
    state = {
        numero: this.props.numero
    }
    
    // Terceira e melhor posibilidade
    maisUm = event => {
        
        this.alteraBaseandoEm(1)
    }
    MenosUm = event => {
        this.alteraBaseandoEm(-1)
    }
    
    alteraBaseandoEm = (diferenca) => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }
    
    
    render() {
        return (
            <div>
                <div>Numero : {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.MenosUm}>Dec</button>
                <button onClick={() => this.alteraBaseandoEm(50)}>Dec 50</button>
                <button onClick={() => this.alteraBaseandoEm(-50)}>Dec -50</button>
                
            </div>
        )
    }
}


/*
SOLUÇÃO UM 
constructor(props) {
    super(props)
    this.maisUm = this.maisUm.bind(this)
} */
/* 
SOLUÇÃO DOIS
<button onClick={() => this.maisUm()}>Inc</button> */