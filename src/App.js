import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/Signup';
import Homepage from './Pages/HomePage/App';
import CartPage from './Pages/Cart/CartPage';
import CategoryList from './Pages/CategoryList/CategoryList';
import Product from './Pages/Product/ProductPage';

const sections = [
  { title: 'Technology', url: '/' },
  { title: 'Design', url: '/category' },
  { title: 'Culture', url: '/category' },
  { title: 'Business', url: '/category' },
  { title: 'Politics', url: '/category' },
  { title: 'Opinion', url: '/category' },
  { title: 'Science', url: '/category' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];
const App = () => {
  return (
    <div>
    <Header title="Sopitas" sections={sections} />
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/category" component={CategoryList} />
        <Route path="/product/:id" component={Product} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
      </Router>
    </div>
  );
};

export default App;
