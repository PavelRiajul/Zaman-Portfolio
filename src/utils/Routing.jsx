import { Route, Routes } from "react-router"
import Home from "../pages/Home"

import Aboutme from "../components/Aboutme"
import Projects from "../pages/Projects"
import Service from "../pages/Service"


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/services" element={<Service/>}/>
            <Route path="/about" element={<Aboutme/>}/>
            <Route path="/project" element={<Projects/>}/>
        </Routes>
    </div>
  )
}

export default Routing