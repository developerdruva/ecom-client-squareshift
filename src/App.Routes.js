import { Route, Routes } from "react-router-dom";
// import { Switch } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Cart from "./components/main/Cart";
import CheckOut from "./components/main/CheckOut";
import Home from "./components/main/Home";
import OrderStatus from "./components/main/OrderStatus";
import YourOrders from "./components/main/YourOrders";


export const AppRoutes = () => {

    return (
        <Fragment>
            <Routes>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/yourorders" element={<YourOrders/>}></Route>
                <Route path="/orderconfirmpage" element={<OrderStatus/>}></Route>
                <Route path='/checkout' element={<CheckOut/>}></Route>
                <Route path='/' element={ <Home/> } ></Route>
            </Routes>
                
        </Fragment>
    )
}