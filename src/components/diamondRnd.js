import React from 'react';
import '../styles/workflow.scss'
import { Rnd } from "react-rnd";
import DiamondPng from '../assets/diamond.png'
import '../styles/diamond.scss'


 export default class DiamondRnd extends React.Component {
    state={
        width: 75,
        height: 75,
        x: -70,
        y: 100
    }
    render(){
        return (
            <>
                  <Rnd
                        size={{ width: this.state.width, height: this.state.height }}
                        className="workflow__diamondRnd-container"
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
                        <img  className="workflow__diamond" src={DiamondPng}></img>
                    </Rnd>
            </>
            );
    }
}

