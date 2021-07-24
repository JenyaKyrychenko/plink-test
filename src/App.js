import React from "react";
import ProductList from "./pages/ProductList";
import Order from "./pages/Order";
import OrderInfo from "./pages/OrderInfo";
import {Route, Switch} from "react-router-dom";

function App() {

    return (
        <>
            <Switch>
                <Route exact path='/' component={ProductList}/>
                <Route exact path='/:id/order' component={Order}/>
                <Route exact path='/:id/info' component={OrderInfo}/>
            </Switch>
        </>
    );
}

export default App;
