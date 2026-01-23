import logo from './logo.svg';
import './App.css';
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from './page/Home/Home';
import CartPage from './page/Cart/CartPage';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
       <Switch>
        <Route exact path="/cart-page" component={CartPage} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
