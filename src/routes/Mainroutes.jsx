import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Recipies from "../pages/Recipies"
import About from "../pages/About"
import Create from "../pages/Create"
import SingleRecipe from "../pages/SingleRecipe"

const Mainroutes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipies />} />
        <Route path="/recipes/:id" element={<SingleRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />
    </Routes>
}

export default Mainroutes
