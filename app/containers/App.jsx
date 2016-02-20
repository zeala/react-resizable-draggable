import React from 'react';
import { connect } from 'react-redux'
import { editRow, deleteRow, addRow, toggleDirection } from '../actions';

import DataMap from '../components/DataMap';
import DataTableBox from '../components/DataTableBox';
import Navbar from '../components/Navbar';
import Draggable, {DraggableCore} from 'react-draggable';
var Resizable = require('react-resizable').Resizable; // or,
var ResizableBox = require('react-resizable').ResizableBox;

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {width: 140, height: 140};
  }

  onClick(){
    this.setState({width: 200, height: 200});
    console.log('onClick');
    console.log(this.state);
  };

  onResize (event){
    console.log(event);
    console.log(event.x, event.y);
    this.setState({width: event.x, height: event.y});
  };

  render() {

    console.log('render called');
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
                <div className='box no-cursor'>
                    <div className="handle">this one is resizable</div>
                    <div className="test">some text</div>
                </div>
            </Resizable>
        </Draggable>
        <ResizableBox
            width={this.state.width}
            height={this.state.height}
            handleSize="[25, 25]"
            className="box2"
            onResize={(event) => this.onResize(event)}
            onClick={() => this.onClick()}
            >
            <div className='box no-cursor'>
                <div className="handle">this one is resizable</div>
                <div className="test">some text</div>
            </div>
        </ResizableBox>

          <ResizableBox
              width={this.state.width}
              height={this.state.height}
              handleSize="[25, 25]"
              className="box2"
              onResize={(event) => this.onResize(event)}
              onClick={() => this.onClick()}
              >
              <Draggable
                  handle=".handle"
                  start={{x: 0, y: 0}}
                  grid={[25, 25]}
                  zIndex={2}>
                  <div className='box no-cursor'>
                      <div className="handle">Drag from here</div>
                      <div className="test">some text</div>
                  </div>
              </Draggable>
          </ResizableBox>




      </div>
    );
  }
}


