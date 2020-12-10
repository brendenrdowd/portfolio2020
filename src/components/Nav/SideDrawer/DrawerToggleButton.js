import React, { Component } from 'react';
import pContext from '../../../pContext';
import './DrawerToggleButton.css';

export class DrawerToggleButton extends Component {
  static contextType = pContext;
  render() {
    return (
      <button
        aria-label='hamburger-menu'
        className='toggle-button'
        onClick={this.context.toggleSideDrawer}
      >
        <div className='toggle-button__line'></div>
        <div className='toggle-button__line'></div>
        <div className='toggle-button__line'></div>
      </button>
    );
  }
}

export default DrawerToggleButton;
