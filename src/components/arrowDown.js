import React from 'react';
import CirclePng from '../assets/circle.png'
import '../styles/workflow.scss'
import { Rnd } from "react-rnd";
import arrowDownPng from "../assets/arrowDown.png"

 export default class ArrowDown extends React.Component {
    state={
        width: 15,
        height: 80,
        x: -43,
        y: 200
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
                    </Rnd>
            </>
            );
    }
}

