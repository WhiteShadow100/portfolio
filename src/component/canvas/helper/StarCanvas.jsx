import { useEffect, useRef } from "react";

function StarCanvas(){
    
    // getting the canvas element
    const canvas = useRef();

    useEffect(() => {
        if(canvas.current){
           

        }    
    }, [])

    return (
        <canvas ref={canvas}></canvas>            
    )
}


export default StarCanvas;