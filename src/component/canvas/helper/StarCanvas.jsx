import { useEffect, useRef, useState } from "react";

function StarCanvas(){

    // represnts the number of star in the canvas
    const [starCount, setStarCount] = useState(5)
    
    // getting the canvas element
    const canvas = useRef();

    

    useEffect(() => {
        if(starCount > 1000){
            setStarCount(pre => 1000)
        }

        if(canvas.current){

            let ctx = canvas.current.getContext('2d');
            
            // Normalize coordinate system to use css pixels.
            // ctx.scale(2, 2);

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


            // radius of the circle

            // Circle Object
            function Circle(x, y, dx, dy, radius = 10, color =  `rgb(255, 255, 255)`){
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.radius = radius;
                this.color = color

                this.draw  = function(){
                    ctx.beginPath();
                    ctx.strokeStyle = this.color;
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

                this.update = function(){
                    if((this.x + this.radius >= canvas.current.width) || (this.x <= 0 + this.radius)){
                        this.dx = -this.dx;
                    }
    
                    if((this.y + radius >= canvas.current.height) || (this.y <= 0 + this.radius)){
                        this.dy = -this.dy;
                    }
    
                    this.x += this.dx;
                    this.y += this.dy;

                    this.draw();
                }
            }

            let circleArray = [];


            for(let i=0; i<starCount; i++){
                let radius = Math.random();
                let x =  Math.random() * (canvas.current.width - radius * 2) + radius;
                let y = Math.random() * (canvas.current.height - radius * radius) + radius;
                let dx = Math.random() >= 0.5 ? 1 : -1;
                let dy = Math.random() >= 0.5 ? 1 : -1;
                let color =  `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`

                let temp_circle = new Circle(x, y, dx, dy, radius, color);
                circleArray.push(temp_circle)
            }


            function animate(){
                requestAnimationFrame(animate)

                // clearing canvas
                ctx.clearRect(0, 0, innerWidth, innerHeight)

                for(let i=0; i < circleArray.length; i++){
                    circleArray[i].update();
                }

                // let temp_circle = new Circle(10, 10, 1, 1);

                // temp_circle.draw()


            }

            
            animate()
            
        }    
    }, [starCount])

    return (
        <>
            <input 
               placeholder="Enter number of stars" 
               type="number"
               value={starCount}
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