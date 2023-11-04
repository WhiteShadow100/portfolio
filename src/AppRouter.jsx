import { Route, Routes } from "react-router-dom"
import CanvasTest from "./component/canvas/CanvasTest"
import PlayGround from "./component/playground/Playground"
import Portfolio from "./component/portfolio/Portfolio"

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<PlayGround />} />
            <Route path="/canvas" element={<CanvasTest />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    )

}

export default AppRouter