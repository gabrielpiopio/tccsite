import {Routes, Route} from "react-router"
import { Home } from "../pages/Home"
import { AboutUs } from "../pages/AboutUs"
import { Details } from "../pages/Details"

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/details" element={<Details/>} />
        </Routes>
    )
}