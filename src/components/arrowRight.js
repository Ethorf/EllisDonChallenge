import React from 'react';
import '../styles/workflow.scss'
import { Rnd } from "react-rnd";
import arrowRightPng from "../assets/arrowRight.png"


 export default class ArrowRight extends React.Component {
    state={
        width: 80,
        height: 15,
        x: -70,
        y: 300
    }
    render(){
        return (
            <>
                  <Rnd
                        size={{ width: this.state.width, height: this.state.height }}
                        className="workflow__rnd"
                        position={{ x: this.state.x, y: this.state.y }}
                        onDragStop={(e, d) => {
                        this.setState({ x: d.x, y: d.y });
                        }}
                        onResizeStop={(e, direction, ref, delta, position) => {
                        this.setState({
                            width: ref.style.width,
                            height: ref.style.height,
                            ...position
                        });
                        }}
                    >
                    <img className="arrowRightImg" src={arrowRightPng} alt="arrow Right"></img>
                    </Rnd>
            </>
            );
    }
}

