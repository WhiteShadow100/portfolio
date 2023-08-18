import { useEffect, useRef, useState } from "react";
import Square from "../../../assets/canvas/shapes/Square";
import Snake from "./Snake";

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

            let snake = new Snake( 10, 'white', 10, 10, 0.5, 0.5)


            // Key listener
            window.addEventListener("keydown", function (event) {
                if(event.code === 'ArrowRight'){
                    snake.move_down()
                }
            
                // Cancel the default action to avoid it being handled twice
                event.preventDefault();
            });


            snake.increase(10)

            snake.test()
            
            function animate(){
                requestAnimationFrame(animate)
                
                // clearing canvas
                ctx.clearRect(0, 0, innerWidth, innerHeight)
                
                snake.draw(ctx)

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