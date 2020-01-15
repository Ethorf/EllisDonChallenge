import React, { Component } from 'react';
import axios from 'axios';

// import styling
import './Expression.scss';

export default class Expression extends Component {

    handleClick(e) {
        e.preventDefault();
        let conditionTest = e.target.name.value;
        let conditionTrue = e.target.iftrue.value;
        let conditionFalse = e.target.iffalse.value;
        axios
        .post("http://localhost:5500/expression", {
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            condition: conditionTest,
            ifTrue: conditionTrue,
            ifFalse: conditionFalse
          }
        })
        .then(result => {
            let data = result.data
            let clearCondition = document.querySelector('.expression__condition-field');
            clearCondition.value = " ";
            let clearTest1 = document.querySelector('.expression__true-field');
            clearTest1.value = " ";
            let clearTest2 = document.querySelector('.expression__false-field');
            clearTest2.value = " ";
            let resetResponse = document.querySelector('.expression__response-field');
            resetResponse.value = data;
;
        })
        .catch(err => {
          console.log(err);
        });
      };
    

    render() {
        return (
            <div className="expression__container">
                <form className="expression__form" id="expressionCapture" onSubmit={this.handleClick}>
                    <h2 className="expression__form-title">Please enter your variables below</h2>
                    <div className="expression__form-condition">
                        <label className="expression__condition-label" htmlFor="condition">Enter condition to test for</label>
                        <input className="expression__condition-field" type="text" name="name" id="testCondition"></input>
                    </div>
                    <div className="expression__form-true">
                        <label className="expression__true-label" htmlFor="iftrue">What do you want to happen when true?</label>
                        <input className="expression__true-field" type="text" name="iftrue" id="testTrue"></input>
                    </div>
                    <div className="expression__form-false">
                        <label className="expression__false-label" htmlFor="iffalse">What do you want to happen when false?</label>
                        <input className="expression__false-field" type="text" name="iffalse" id="testFalse"></input>
                    </div>
                    <button className="expression__button">Submit</button>
                </form>
                <form className="expression__response" id="responseCapture">
                    <div className="expression__response-area">
                        <label className="expression__response-label" htmlFor="response">Response</label>
                        <input className="expression__response-field" type="textarea" name="response" id="response" value="holding"></input>
                    </div>
                </form>
            </div>
        );
    }
}

