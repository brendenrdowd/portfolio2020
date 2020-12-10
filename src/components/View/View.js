import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../Home'
import Work from '../Work'
import Contact from '../Contact'
import About from '../About'

export class View extends Component {
  render() {
    return (
      <section className="view">
        <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={'/work'} component={Work} />
            <Route path={'/about'} component={About} />
            <Route path={'/contact'} component={Contact} />
            {/* <Route path={'/policies'} component={PoliciesPage} /> */}
            {/* <Route component={NotFoundPage} /> */}
          </Switch>
      </section>
    )
  }
}

export default View
