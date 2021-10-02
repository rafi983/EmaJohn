import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import OrderPlaced from "./components/OrderPlaced/OrderPlaced";
import OrderReview from "./components/OrderReview/OrderReview";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>

          <Route exact path="/shop">
            <Shop />
          </Route>

          <Route exact path="/review">
            <OrderReview />
          </Route>

          <Route exact path="/inventory">
            <Inventory />
          </Route>

          <Route exact path="/placeorder">
            <OrderPlaced />
          </Route>

          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
