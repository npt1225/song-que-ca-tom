import logo from './logo.svg';
import './App.css';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from './page/Home/Home';
import CartPage from './page/Cart/CartPage';
import About from './page/About/About';
import Contact from './page/Contact/Contact';
import Products from './page/Products/Products';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
       <Switch>
                <Route exact path="/" component={Home} />
        <Route exact path="/cart-page" component={CartPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
