import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
var Resizable = require('react-resizable').Resizable;
var ResizableBox = require('react-resizable').ResizableBox;

import ResizableDraggableBox from '../components/resizable-draggable-box';

export default class App extends React.Component {
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

    console.log('render called');
    return (
      <div>
          <ResizableDraggableBox>
                <div className='box no-cursor'>
                    <div className="handle">this one is resizable</div>
                    <div className="test">some text</div>
                </div>
          </ResizableDraggableBox>
          <ResizableDraggableBox>
              <div className='box no-cursor'>
                  <div className="handle">this one is resizable</div>
                  <div className="test">some text</div>
              </div>
          </ResizableDraggableBox>
          <ResizableDraggableBox>
              <div className='box no-cursor'>
                  <div className="handle">this one is resizable</div>
                  <div className="test">some text</div>
              </div>
          </ResizableDraggableBox>
      </div>
    );
  }
}


