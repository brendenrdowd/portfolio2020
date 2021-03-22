import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import pContext from '../../../pContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class NavLinks extends Component {
  static contextType = pContext;

  // location = useLocation();

  closeModal = () => {
    this.context.closeBackdrop();
  };
  // need to grab active link from params or context
  
  render() {
    let links = [
        // Link to homepage/dashboard
        // <li onClick={this.closeModal} key='3' activeClassName="active" className='tooltip nav-link  nav-link-grow-up'>
        //   <NavLink to='/'>
        //     {/* <FontAwesomeIcon icon='home' />{' '} */}
        //     HOME
        //   </NavLink>
        // </li>,
        // Link to create new story
        <li onClick={this.closeModal} key='4' activeClassName="active" className='tooltip nav-link nav-link-grow-up'>
          <NavLink to='/work'>
            {/* <FontAwesomeIcon icon='plus-square' />{' '} */}
            WORK
          </NavLink>
        </li>,
        <li onClick={this.closeModal} key='9' activeClassName="active" className='tooltip nav-link nav-link-grow-up'>
          <NavLink to='/about'>
            {/* <FontAwesomeIcon icon='user-edit' />{' '} */}
            ABOUT
          </NavLink>
        </li>,
        // Link to log out user and return them to landing page
        <li onClick={this.closeModal} key='5' activeClassName="active" className='tooltip nav-link nav-link-grow-up'>
          <NavLink to='/contact'>
            {/* <FontAwesomeIcon icon='sign-out-alt' />{' '} */}
            CONTACT
          </NavLink>
        </li>,
      ];

    return <ul>{links}</ul>;
  }
}

export default NavLinks;
