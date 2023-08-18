import { useEffect, useRef, useState } from "react";
import Square from "../../../assets/canvas/shapes/Square";

function SnakeGame(){

    const ref_canvas = useRef();

    // speed at which snake move in given direction
    // const [snakeVelocity, setSnakeVelocity] = useState({
    //     x_velocity: 0.7,
    //     y_velocity: 0
    // })

    

    useEffect(() => {
        if(ref_canvas.current){
            let ctx = ref_canvas.current.getContext('2d');

            // ctx.canvas.width  = window.innerWidth;
            // ctx.canvas.height = window.innerHeight;

            let square = new Square(ctx, 20, 'white', 10, 10)


            // Key listener
            window.addEventListener("keydown", function (event) {
                if(event.code === 'ArrowRight'){
                    let {x, y} = square.getCord()
                    console.log(square.x_cord)
                    square.setXCord(x+50)
                }
                // switch (event.key) {
                // case "ArrowDown":
                //     square.draw()
                //     // console.log(square.getCord())
                //     break;
                // case "ArrowUp":
                //     // square.move_down()
                //     break;
                // case "ArrowLeft":
                //     // code for "left arrow" key press.
                //     break;
                // case "ArrowRight":
                //     // code for "right arrow" key press.
                //     break;
                // default:
                //     return; // Quit when this doesn't handle the key event.
                // }
            
                // Cancel the default action to avoid it being handled twice
                event.preventDefault();
            });

            


            
            function animate(){
                requestAnimationFrame(animate)
                
                // clearing canvas
                ctx.clearRect(0, 0, innerWidth, innerHeight)
                
                square.draw()

                // square.move()
            }

            
            
            animate()

        }
    }, []);

    

    return (
        <>
            <canvas ref={ref_canvas} width="400" height="300" />
        </>
    )
}

export default SnakeGame;