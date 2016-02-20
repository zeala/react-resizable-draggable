import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
var Resizable = require('react-resizable').Resizable; // or,
var ResizableBox = require('react-resizable').ResizableBox;

export default class ResizableDraggableBox extends React.Component {
    constructor(props){
        super(props);

        this.state = {width: 140, height: 140};
    }

    onClick(){
       /* this.setState({width: 200, height: 200});
        console.log('onClick');
        console.log(this.state);*/
    };

    onResize (...args){
        console.log(args);
        this.setState({width: event.x, height: event.y});
    };

    render() {
        return (
            <div>
                <Draggable
                    handle=".handle"
                    start={{x: 0, y: 0}}
                    grid={[25, 25]}
                    zIndex={2}>
                    <Resizable
                        width={this.state.width}
                        height={this.state.height}
                        handleSize="[25, 25]"
                        className="box2"
                        style={{width: this.state.width + 'px', height: this.state.height + 'px'}}
                        onResize={(event) => this.onResize(event)}
                        onClick={() => this.onClick()}
                        >
                        {this.props.children}
                    </Resizable>
                </Draggable>
            </div>
        );
    }
}


