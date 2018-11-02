import React, { Component } from 'react'

export default class Products extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dummy: [1,2,3,4,5,6,7,8,9,10,11,12]
    }
  }

  render() {
    return (
      <div className="products column is-8">
        <div className="columns is-multiline products-wrapper">
            { this.state.dummy.map(item => (
              <div className="column is-4" key={item}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/480x320.png" alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-content">Item { item }</div>
                </div>
              </div>))
            }
        </div>
        <style jsx="true">{`
          .products .products-wrapper { overflow-y: scroll; max-height: 570px; }
        `}</style>
      </div>
    )
  }
}
