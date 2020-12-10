import { Component } from 'react'
import './App.css';
import View from './components/View/View'
import { BrowserRouter as Router } from 'react-router-dom';
import Toolbar from './components/Nav/Toolbar/Toolbar';
import SideDrawer from './components/Nav/SideDrawer/SideDrawer';
import Backdrop from './components/Nav/Backdrop/Backdrop';
import Footer from './components/Footer/Footer'
import pContext from './pContext';

export default class App extends Component {
  static contextType = pContext;
  render(){
    let backdrop;
    if (this.context.sideDrawerOpen) {
      backdrop = <Backdrop />;
    }
    const imageUrl = process.env.PUBLIC_URL + '/portfolioBackground1.jpg'
    console.log(imageUrl)
    return (
      <section className="App">
      <Router>
      <Toolbar />
        <SideDrawer show={this.context.sideDrawerOpen} />
        {backdrop}
        <View />
      </Router>
      <Footer />
    </section>
  );
  }
}
