import React, { Component } from 'react';
import './product.css';

class Product extends Component {
    constructor()
    {
        super();
        this.state={
            product:[]
        };
    }
    componentDidMount()
    {
        /*fetch("/api/product")
        .then(res=>res.json())
        .then(product=>this.setState({product},()=>lonsole.log('Customers fetched...', product)));*/
        fetch('/api/product')
        .then(res => res.json())
        .then(product => this.setState({product}, () => console.log('product fetched...', product)));
    }
  render() {
    return (
        <div>
        <h2>product</h2>
        <ul>
        {this.state.product.map(product => 
          <li key={product.id}>{product.title} </li>
        )}
        </ul>
      </div>
    );
  }
}

export default Product;
