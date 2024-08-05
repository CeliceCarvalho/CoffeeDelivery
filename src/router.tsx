import { Route, Routes } from "react-router-dom";
import { ConfirmedOrder } from "./pages/ConfirmedOrder";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./DefaultLayout";
import { Checkout } from "./pages/Checkout";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/confirmedOrder" element={<ConfirmedOrder/>}/>
            </Route>
        </Routes>
    )
}