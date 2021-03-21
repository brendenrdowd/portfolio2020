import React, { Component } from 'react';


const pContext = React.createContext({
  toggleSideDrawer: () => {},
  closeBackdrop: () => {},
  path:""
})

export default pContext;

export class PProvider extends Component {
  state = {
    sideDrawerOpen: false
  }

  handleBackdropClose = () => {
    this.setState({ sideDrawerOpen: false });
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render(){
    const value = {
      sideDrawerOpen: this.state.sideDrawerOpen,
      closeBackdrop: this.handleBackdropClose,
      toggleSideDrawer: this.drawerToggleClickHandler,
      path:""
    }
    return (
      <pContext.Provider value={value}>
        {this.props.children}
      </pContext.Provider>
    )
  }
}