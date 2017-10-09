import React, { Component } from 'react';

let style = { 
        textAlign:'center',
        'position':'relative','width':'15%','backgroundColor':'#ccc',padding:'5px',
        borderRadius:'5px'
}

let buttonStyle = {
    width: '50%',
    border: 'none',
    boxShadow: '1px 1px 1px 0px #f6f6f6',
    outline:'none'
}
export default class Counter  extends Component {

    constructor( props ) {
        super(props)

        this.state = { count:0 };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {

        this.setState({ count: this.state.count + 1 })

    }

    decrement() {

        this.setState({ count: this.state.count - 1 })

    }
    render () {
        return (
            <div style={ style }>
                <h1> { this.state.count } </h1>
                <button style={ buttonStyle } onClick={ this.increment }>+</button>
                <button style={ buttonStyle } onClick={ this.decrement }>-</button>
            </div>
        );
    }
}