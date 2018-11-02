import React, { Component } from 'react';

import Header from './Header/Header';
import Products from './Products/Products';
import Cart from './Cart/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="columns is-centered has-background-danger">
          <Header />
        </div>
        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <div className="columns">
              <Products />
              <Cart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
