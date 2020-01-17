import React from 'react';
import '../styles/workflow.scss'
import { Rnd } from "react-rnd";



 export default class TextBox extends React.Component {
    state={
        width: 75,
        height: 75,
        x: -70,
        y: 460
    }
    render(){
        return (
            <>
                  <Rnd
                        size={{ width: this.state.width, height: this.state.height }}
                        className="workflow__textBox-container"
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
                        <textarea className="workflow__textBox" defaultValue="text here"></textarea>
                    </Rnd>
            </>
            );
    }
}

