import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from '../NavLinks/NavLinks';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = (props) => (
  <header className='toolbar'>
    <div class="glass">
    <nav className='toolbar__navigation'>
      <div className='toolbar__logo glitch' data-text="BRENDEN DOWD">
        <Link to='/'>BRENDEN DOWD</Link>
      </div>
      <div className='spacer'></div>
      <div className='toolbar__toggle'>
        <DrawerToggleButton />
      </div>
      <div className='toolbar__navitgation-items'>
        <NavLinks />
      </div>
    </nav>
    </div>
  </header>
);

export default toolbar;
