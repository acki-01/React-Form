/** @format */

import React, { Component } from 'react';

import classes from 'components/UI/Modal/Modal.css';
import { Backdrop } from 'components/UI';

class Modal extends Component {
    shouldComponentUpdate(nextProps) {
        return (
            nextProps.show !== this.props.show ||
            nextProps.children !== this.props.children
        );
    }

    render() {
        return (
            <React.Fragment>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show
                            ? 'translate(0)'
                            : 'translate(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                    }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}

export default Modal;
