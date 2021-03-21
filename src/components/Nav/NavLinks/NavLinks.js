import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <li onClick={this.closeModal} key='3' className='tooltip nav-link  nav-link-grow-up'>
          <Link to='/'>
            {/* <FontAwesomeIcon icon='home' />{' '} */}
            HOME
          </Link>
        </li>,
        // Link to create new story
        <li onClick={this.closeModal} key='4' className='tooltip nav-link nav-link-grow-up'>
          <Link to='/work'>
            {/* <FontAwesomeIcon icon='plus-square' />{' '} */}
            WORK
          </Link>
        </li>,
        <li onClick={this.closeModal} key='9' className='tooltip nav-link nav-link-grow-up'>
          <Link to='/about'>
            {/* <FontAwesomeIcon icon='user-edit' />{' '} */}
            ABOUT
          </Link>
        </li>,
        // Link to log out user and return them to landing page
        <li onClick={this.closeModal} key='5' className='tooltip nav-link nav-link-grow-up'>
          <Link to='/contact'>
            {/* <FontAwesomeIcon icon='sign-out-alt' />{' '} */}
            CONTACT
          </Link>
        </li>,
      ];

    return <ul>{links}</ul>;
  }
}

export default NavLinks;
