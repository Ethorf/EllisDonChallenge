import React, { Component } from 'react';

// import styling
import './Expression.scss';

export default class Expression extends Component {

    handleClick(e) {
        console.log(e);
        e.preventDefault();
    }

    render() {
        return (
            <div className="expression__container">
                <form className="expression__form" id="expressionCapture" onSubmit={this.handleClick}>
                    <div className="expression__form-condition">
                        <label className="expression__condition-label" htmlFor="condition">Enter condition to test for</label>
                        <input className="expression__condition-field" type="text" name="name" id="testCondition"></input>
                    </div>
                    <div className="expression__form-true">
                        <label className="expression__true-label" htmlFor="true">What do you want to happen when true?</label>
                        <input className="expression__true-field" type="text" name="true" id="testTrue"></input>
                    </div>
                    <div className="expression__form-false">
                        <label className="expression__false-label" htmlFor="false">What do you want to happen when false?</label>
                        <input className="expression__false-field" type="text" name="false" id="testFalse"></input>
                    </div>
                    <button className="expression__button">Submit</button>
                </form>
            </div>
        );
    }
}

