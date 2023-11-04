import { useEffect, useRef } from "react";
import tomato from './tomato.png';

function ProductivityTimer(){

    const canvas = useRef();

    useEffect(() => {
        window.onload = function() {
            const ctx = canvas.current.getContext('2d');
            ctx.imageSmoothingEnabled = false;

            let canvas_width = canvas.current.width;
            let canvas_height = canvas.current.height;


            // var img = new Image();
            // img.src = './tomato.png'

            // var hRatio = canvas_width  / img.width;
            // var vRatio =  canvas_height / img.height;
            // var ratio  = Math.max ( hRatio, vRatio );
            // var centerShift_x = ( canvas_width - img.width*ratio ) / 2;
            // var centerShift_y = ( canvas_height - img.height*ratio ) / 2;  
            
            var img = new Image();
            img.src = 'tomato.png';

            ctx.drawImage(img, 0,0, canvas_width, canvas_height)
            
            function animate(){
                requestAnimationFrame(animate)
                
                // ctx.clearRect(0,0,canvas.width, canvas.height);
                // ctx.drawImage(img,0,0)
            }

            // clearing canvas
            // ctx.clearRect(0, 0, innerWidth, innerHeight)

            animate();
        }
        // if(canvas != null && canvas.current != null){
            
        // }
    }, [])

    return(
        <>
            <canvas ref={canvas} width='600px' height='400px'></canvas>
        </>
    )
}


export default ProductivityTimer;