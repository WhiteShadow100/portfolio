import { useEffect, useRef, useState } from "react";

function StarCanvas(){

    // represnts the number of star in the canvas
    const [starCount, setStarCount] = useState(5)
    
    // getting the canvas element
    const canvas = useRef();

    useEffect(() => {
        if(canvas.current){
            
            let ctx = canvas.current.getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            
            for(let i = 1; i <= starCount; i++){
                let x = Math.random() * 500;
                let y = Math.random() * 500;
                
                ctx.beginPath();
                ctx.fillStyle = "white";
                // ctx.strokeFill = "#FFFFFF";
                ctx.arc(x, y, 1, 0, Math.PI * 2, false);
                ctx.fill();
                ctx.stroke();
                
            }
        }    
    }, [starCount])

    return (
        <>
            <input 
               placeholder="Enter number of stars" 
               type="number"
               onChange={(e) => {
                setStarCount(pre => {
                    if(e.target.value < 0){
                        return 1
                    }else{
                        return e.target.value
                    }
                })
               }}
            />
            <br /><br /><br />
            <canvas ref={canvas}></canvas>            
        </>
    )
}


export default StarCanvas;