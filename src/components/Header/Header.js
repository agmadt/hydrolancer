import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="column is-two-thirds is-mobile">
          <div className="pt1 pl1 pr1">
            <input className="input" type="text" placeholder="Search products" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
