import React, { Component } from 'react';
import AnimationManager from '../core/animationManager';


const prev = (am) => {
    am.animatePrev();
}

const next = (am) => {
    am.next();
}

const trigger = (am) => {
    am.toggle();
}

class Footer extends Component {

    constructor() {
        super();
        this.am = {
            next: () => {
                console.log('clecked next');
            },
            toggle: () => {
                console.log('clicked toggle');
            }
        }
    }

    componentDidMount() {
        this.am.init();
    }

    componentDidUpdate() {
        this.am.init();
    }

    render() {
        this.am = new AnimationManager(this.props.animationWrapper, this.props.fn, this.props.args);
        return (
            <div className="footer">
                <button onClick={ () => prev(this.am)} id="next">Prev</button>
                <button onClick={ () => next(this.am)} id="next">Next</button>
                <button onClick={ () => trigger(this.am)} id="trigger">Trigger</button>
            </div>
        );
    }
}

export default Footer;