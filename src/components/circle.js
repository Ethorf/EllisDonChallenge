import React from 'react';
import CirclePng from '../assets/circle.png'
import '../styles/circle.scss'
import Draggable, {DraggableCore} from 'react-draggable';


 export default class Circle extends React.Component {
    render(){
        return (
            <>
                <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[10, 10]}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}
                    >
                     <div>
                        <img onMouseUp={this.props.clickFunc} className="workflow__circle handle" src={CirclePng} alt="Circle Thingy"></img>
                    </div>
                </Draggable>
            </>
            );
    }
}

