import { useEffect, useRef, useState } from "react";

function StarCanvas(){

    // represnts the number of star in the canvas
    const [starCount, setStarCount] = useState(5)
    
    // getting the canvas element
    const canvas = useRef();

    useEffect(() => {
        if(canvas.current){

            console.log(canvas.current.width)

            // canvas.current.onmousemove = drawCircle;

            // function drawCircle(event){
            //     console.log("event: ", event)

            //     console.log("mouse location:", event.clientX, event.clientY)
            //     console.log("mouse location:", event.screenX, event.screenY)

            //     let ctx = canvas.current.getContext('2d');

            //     ctx.clearRect(0, 0, canvas.width, canvas.height);

                
            //     let x = event.screenX;
            //     let y = event.screenY;
                
            //     ctx.beginPath();
            //     // ctx.fillStyle = `rgb(${ Math.random() * 255}, ${ Math.random() * 255}, ${ Math.random() * 255})`;
            //     ctx.strokeStyle = `rgb(${ Math.random() * 255}, ${ Math.random() * 255}, ${ Math.random() * 255})`;
            //     ctx.arc(x, y, 10, 0, Math.PI * 2, false);
            //     // ctx.fill();
            //     ctx.stroke();
            //     // for(let i = 1; i <= starCount; i++){
                    
            //     // }
            // }

            let ctx = canvas.current.getContext('2d');

            // radius of the circle
            let radius = 10
            
            let x = Math.random() * (canvas.current.width - radius);
            let y = Math.random() * (canvas.current.height - radius);

            // vector represnting movement
            let dx = Math.random() >= 0.5 ? 1 : -1
            let dy = Math.random() >= 0.5 ? 1 : -1


            function animate(){
                requestAnimationFrame(animate)

                // clearing canvas
                ctx.clearRect(0, 0, innerWidth, innerHeight)

                // let x = Math.random() * 500;
                // let y = Math.random() * 500;

                
                ctx.beginPath();
                // ctx.strokeStyle = `rgb(${ Math.random() * 255}, ${ Math.random() * 255}, ${ Math.random() * 255})`;
                ctx.strokeStyle = `rgb(255, 255, 255)`;
                ctx.arc(x, y, radius, 0, Math.PI * 2, false);
                ctx.stroke();

                if((x + radius > canvas.current.width) || (x < 0 + radius)){
                    dx = -dx
                }

                if((y + radius > canvas.current.height) || (y < 0 + radius)){
                    dy = -dy
                }

                x += dx
                y += dy

                console.log(y)

            }

            animate()
            
            // let ctx = canvas.current.getContext('2d');

            // ctx.clearRect(0, 0, canvas.width, canvas.height);

            
            // for(let i = 1; i <= starCount; i++){
            //     let x = Math.random() * 500;
            //     let y = Math.random() * 500;
                
            //     ctx.beginPath();
            //     // ctx.fillStyle = `rgb(${ Math.random() * 255}, ${ Math.random() * 255}, ${ Math.random() * 255})`;
            //     ctx.strokeStyle = `rgb(${ Math.random() * 255}, ${ Math.random() * 255}, ${ Math.random() * 255})`;
            //     ctx.arc(x, y, 10, 0, Math.PI * 2, false);
            //     // ctx.fill();
            //     ctx.stroke();
                
            // }
        }    
    }, [])

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