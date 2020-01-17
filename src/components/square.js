import React from 'react';
import SquarePng from '../assets/square.png'
import '../styles/circle.scss'
import Draggable, {DraggableCore} from 'react-draggable';


 export default class Square extends React.Component {
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
                        <img onMouseUp={this.props.clickFunc} className="workflow__square handle" src={SquarePng} alt="Circle Thingy"></img>
                    </div>
                </Draggable>
            </>
            );
    }
}