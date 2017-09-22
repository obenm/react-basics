import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>React Sample Store</span>
        </div>
        <p className="App-intro">
          <ProductList/>
        </p>
      </div>
    );
  }
}

class Total extends Component{
  render() {
    return(
      <div>
        <h3> Total Cash: ${this.props.total}</h3>
      </div>
    );
  }
}

class Product extends Component{
  render() {
    return(
      <p>
        <strong>{this.props.name}</strong> - ${this.props.price} &nbsp;
        <button onClick={this.buy}>Buy</button> &nbsp;
        <button onClick={this.show}>Show</button> <br/>
        <span>Devices sold: {this.state.qty} unity(s)</span>
        <hr/>
      </p>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
        qty: 0 
    }
    this.buy = this.buy.bind(this);
    this.show = this.show.bind(this);
  }

  buy() {
    this.setState({
      qty: this.state.qty + 1
    });
    this.props.handleTotal(this.props.price);
  }

  show(){
    this.props.handleShow(this.props.name);
  }
}

class ProductList extends Component{
  render() {
    return(
      <div>
        <Product name="Android" price={499} handleShow={this.showProduct} handleTotal={this.calculateTotal}/>
        <Product name="Apple" price={799} handleShow={this.showProduct} handleTotal={this.calculateTotal}/>
        <Product name="WPhone" price={299} handleShow={this.showProduct} handleTotal={this.calculateTotal}/>
        <Total total={this.state.total}/>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
        total: 0 
    }
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  showProduct(name){
    alert("You selected " + name + " device");
  }

  calculateTotal(price){
    this.setState({
      total: this.state.total + price
    })
  }
}

export default App;
