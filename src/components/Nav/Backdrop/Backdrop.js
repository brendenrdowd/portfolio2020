import React, { Component } from 'react';
import pContext from '../../../pContext';
import './Backdrop.css';

export class Backdrop extends Component {
  static contextType = pContext;
  render() {
    return <div className='backdrop' onClick={this.context.closeBackdrop} />;
  }
}

export default Backdrop;
