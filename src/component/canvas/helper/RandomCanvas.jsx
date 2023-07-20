import { useEffect, useRef } from "react";

function RandomCanvas(){

    // getting the canvas element
    const canvas = useRef();

    useEffect(() => {
        if(canvas.current){
            // canvas.width = window.innerWidth;
            // canvas.height = window.innerHeighth;
        
            let ctx = canvas.current.getContext('2d');
        
            // drawing rectangle
            ctx.fillStyle = "blue";
            ctx.fillRect(10, 10, 100, 100);
            // ctx.fillStyle = "green";
            // ctx.fillRect(120, 10, 100, 100);

            // drawing lines
            ctx.strokeStyle = "white"
            ctx.beginPath();
            ctx.moveTo(10, 120);
            ctx.lineTo(20, 120);
            ctx.lineTo(20, 130);
            ctx.lineTo(30, 130);
            ctx.lineTo(30, 120);
            // ctx.lineTo(120,s 140)
            ctx.stroke();


            // drawing circle
            ctx.beginPath();
            ctx.fillStyle = "lightblue";
            ctx.arc(200, 60, 50, 0, Math.PI * 2, false)
            ctx.fill();

        }
    }, [])

    return (
        <canvas ref={canvas}></canvas>            
    )
}

export default RandomCanvas;