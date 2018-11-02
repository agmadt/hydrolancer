import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    return (
      <div className="cart column is-4">
        <div className="card mb1 active">
          <header className="card-header">
            <div className="card-header-title">
              <div className="flex-none">
                <div className="columns is-mobile">
                  <div className="column">
                    <div className="item-quantity">1</div>
                  </div>
                  <div className="column is-7">
                    <div className="item-name">Kopi Pahit</div>
                  </div>
                  <div className="column is-4">
                    <div className="item-price">Rp. 28.000</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="card-content p1">
            <div>Pilihan</div>
            <div className="mb1">
              <ul>
                <ol><label><input type="checkbox" /> Pakai Cream?</label></ol>
                <ol><label><input type="checkbox" /> Pakai Sedotan?</label></ol>
              </ul>
            </div>
          </div>
        </div>
        <div className="card mb1">
          <header className="card-header">
            <div className="card-header-title">
              <div className="flex-none">
                <div className="columns is-mobile">
                  <div className="column">
                    <div className="item-quantity">1</div>
                  </div>
                  <div className="column is-7">
                    <div className="item-name">Kopi Pahit</div>
                  </div>
                  <div className="column is-4">
                    <div className="item-price">Rp. 28.000</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="card-content p1">
            <div>Pilihan</div>
            <div className="mb1">
              <ul>
                <ol><label><input type="checkbox" /> Pakai Cream?</label></ol>
                <ol><label><input type="checkbox" /> Pakai Sedotan?</label></ol>
              </ul>
            </div>
          </div>
        </div>
        <div className="total-cart">
          <div className="card mb1">
            <header className="card-header">
              <div className="card-header-title pb0">
                <div className="flex-none">
                  <div className="columns mb0">
                    <div className="column">
                      <div>Keterangan</div>
                      <div className="field">
                        <div className="control">
                          <textarea className="textarea is-info" placeholder="Keterangan tambahan"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns mb0">
                    <div className="column is-4">
                      <div className="item-name">Sub Total:</div>
                    </div>
                    <div className="column is-8">
                      <div className="item-price has-text-right">Rp. 28.000</div>
                    </div>
                  </div>
                  <div className="columns mb0">
                    <div className="column is-4">
                      <div className="item-name">Tax:</div>
                    </div>
                    <div className="column is-8">
                      <div className="item-price has-text-right">Rp. 280</div>
                    </div>
                  </div>
                  <div className="columns mb0">
                    <div className="column is-4">
                      <div className="item-name">Total:</div>
                    </div>
                    <div className="column is-8">
                      <div className="item-price has-text-right">Rp. 28.280</div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="card-content p1">
              <a class="button is-primary is-fullwidth">Bayar</a>
            </div>
          </div>
        </div>
        <style jsx="true">{`
          .cart .flex-none { display: block; flex: none; width: 100%; }
          .cart .card .card-content { display: none; }
          .cart .card.active .card-content, .cart .total-cart .card .card-content { display: block; }
          .cart .card.active { border-top: 4px solid hsl(204, 86%, 53%); }
          .cart .total-cart .card { border-top: 4px solid hsl(171, 100%, 41%); }
        `}</style>
      </div>
    )
  }
}
