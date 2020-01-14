import React from 'react';
import ArrowPng from '../assets/arrow.png'
import '../styles/circle.scss'
import Draggable, {DraggableCore} from 'react-draggable';
import Moveable from "react-moveable";


 export default class Arrow extends React.Component {
    rotate = 0;
    render(){
        return (
            <>
              <Moveable
                target={document.querySelector(".rotatable")}
                rotatable={true}
                throttleRotate={0}
                onRotate={({ target, beforeDelta, delta }) => {
                this.rotate += delta;
                target.style.transform
                = "rotate(" + this.rotate +  "deg)";
                }}
                />
                 <div>
                    <img onMouseUp={this.props.clickFunc} className="workflow__arrow handle" src={ArrowPng} alt="arrow Thingy"></img>
                </div>
                {/* <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[25, 25]}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}
                    >
                     <div>
                        <img onMouseUp={this.props.clickFunc} className="workflow__arrow handle" src={ArrowPng} alt="arrow Thingy"></img>
                    </div>
                </Draggable> */}
                {/* BOBOBOBOBOBOBOBOBOBOBOB */}
                 {/* </Moveable> */}
            
            </>
            );
    }
}