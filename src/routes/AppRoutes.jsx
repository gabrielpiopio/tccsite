import {Routes, Route} from "react-router"
import { Home } from "../pages/Home"
import { AboutUs } from "../pages/AboutUs"
import { Details } from "../pages/Details"
import { Layout } from "../components/Layout"
import { Referencias } from "../pages/Referencias"
import { Instrucoes } from "../pages/Instrucoes"

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/details" element={<Details/>} />
                <Route path="/referencias" element={<Referencias/>} />
                <Route path="/instrucoes" element={<Instrucoes/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
            </Route>
        </Routes>
    )
}