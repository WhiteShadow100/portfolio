import { Route, Routes } from "react-router-dom"
import CanvasTest from "./component/canvas/CanvasTest"
import PlayGround from "./component/playground/Playground"

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<PlayGround />} />
            <Route path="/canvas" element={<CanvasTest />} />
        </Routes>
    )

}

export default AppRouter