import React from 'react';
import '../styles/workflow.scss';
import Circle from '../components/circle'
import DiamondRnd from '../components/diamondRnd'
import Square from '../components/square'
import ArrowRight from "../components/arrowRight"
import ArrowDown from "../components/arrowDown"
import Textbox from "../components/textBox.js"


 export default class Workflow extends React.Component {

    state={
        copied:false,
        circArr:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
    }

    frame = {
        translate: [0, 0],
    };

     clickFunc = () =>{
         this.setState({
             copied:true,
             circArr:this.state.circArr.concat("bob")
         })
         console.log(this.state.circArr)
     }
      circleList = this.state.circArr.map((number) =>
        <li><Circle clickFunc={this.clickFunc} /></li>);

      squareList = this.state.circArr.map((number) =>
        <li><Square clickFunc={this.clickFunc} /></li>); 

        arrowRightList = this.state.circArr.map((number) =>
        <li><ArrowRight clickFunc={this.clickFunc} /></li>);
        
        diamondList = this.state.circArr.map((number) =>
        <li><DiamondRnd clickFunc={this.clickFunc} /></li>);         

        arrowDownList = this.state.circArr.map((number) =>
        <li><ArrowDown clickFunc={this.clickFunc} /></li>);   

        textboxList = this.state.circArr.map((number) =>
        <li><Textbox clickFunc={this.clickFunc} /></li>);         

    render(){
        return (
            <div className="workflow">
                <div className="workflow__sidebar-container">
                    <ul className="workflow__sidebar" >
                        {this.circleList}
                        {this.squareList}
                        {this.arrowRightList}
                        {this.arrowDownList}
                        {this.diamondList}
                        {this.textboxList}                        
                    </ul>
                </div>
                <h1 className="workflow__title">Workflow Creator</h1>
                <div className="workflow__canvas"></div>
            </div>
            );
    }
 
}



