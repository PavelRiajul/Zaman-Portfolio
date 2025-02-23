import { Route, Routes } from "react-router"
import Home from "../pages/Home"


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default Routing