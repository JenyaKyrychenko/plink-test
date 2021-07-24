import React from "react";
import ProductList from "./pages/ProductList";
import Order from "./pages/Order";
import OrderInfo from "./pages/OrderInfo";
import {CSSTransition} from "react-transition-group";
import {Route} from "react-router-dom";

function App() {
    const routes = [
        {path:'/', Component: ProductList},
        {path:'/:id/order', Component: Order},
        {path:'/:id/info', Component: OrderInfo},

    ]

    return (
        <>
            {routes.map(({path, Component})=>(
                <Route key={path} exact path={path}>
                    {({match})=>
                        <CSSTransition
                        timeout={1000}
                        classNames='container'
                        unmountOnExit
                        mountOnEnter
                        in={match !== null}
                        >
                            <Component/>
                        </CSSTransition>
                    }
                </Route>
            ))}
            </>
    );
}

export default App;
