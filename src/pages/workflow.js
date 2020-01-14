import React from 'react';
import '../styles/workflow.scss';
import Circle from '../components/circle'
import Diamond from '../components/diamond'
import Square from '../components/square'
import Arrow from '../components/arrow'

import Draggable, {DraggableCore} from 'react-draggable';
import CirclePng from "../assets/circle.png"


 export default class Workflow extends React.Component {

    state={
        copied:false,
        circArr:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
    }
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

    render(){
        return (
            <div className="workflow">
                <ul className="workflow__sidebar">
                    {/* {this.state.copied ? <Circle/>  : <div className="workflow__hidden"/>} */}
                    {this.circleList}

                    {this.squareList}
                    {/* {this.state.circArr.forEach(item => <Circle clickFunc={this.clickFunc} />)} */}
                    <Square />
                    <Arrow />
                    {/* <Diamond /> */}
                </ul>
                <div className="workflow__canvas"></div>
            </div>
            );
    }
 
}



