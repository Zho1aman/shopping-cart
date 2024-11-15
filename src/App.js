import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <h1>Магазин</h1>
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;