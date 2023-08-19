import { useEffect, useRef, useState } from "react";
import Snake from "./Snake";
import Food from "./Food";

function SnakeGame({width=400, height=300}){
    
    // frame per second of the game
    const FPS = 8;

    // reference of canvas
    const ref_canvas = useRef();

    // holds the socre of the user
    const [score, setScore] = useState(0)

    // holds the current border structure
    const [borderStructure, setBorderStructure] = useState([
        {
            x_cord: 0,
            y_cord: 0,
            width: 5,
            height: height
        },
        {
            x_cord: width - 5,
            y_cord: 0,
            width: 5,
            height: height
        },
        {
            x_cord: 0,
            y_cord: 0,
            width: width,
            height: 5
        },
        {
            x_cord: 0,
            y_cord: height - 5,
            width: width,
            height: 5
        },        
    ])

    // default value for snake object and food object
    const defaultData = {
        snakeSize: 8,
        snakeColor: 'white',
        snakeXCord: 100,
        snakeYCord: 100,
        foodSize: 3,
        foodColor: 'white',
        foodXCord: 50,
        foodYCord: 50
    }
    

    useEffect(() => {
        if(ref_canvas.current){
            // initilizing canvas context
            let ctx = ref_canvas.current.getContext('2d'); 
            
            // initializing the snake
            let snake = new Snake(defaultData.snakeSize, defaultData.snakeColor, defaultData.snakeXCord, defaultData.snakeYCord, defaultData.snakeSize, defaultData.snakeSize)
            
            // initializing food
            let food = new Food(defaultData.foodSize, defaultData.foodColor, defaultData.foodXCord, defaultData.foodYCord)

            // holds the collision value, true if collison has occured
            let isGameOver = false
            
            // function that handles the key event
            function keyEventHandler(event){

                let valid_events = ['ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp']

                if(valid_events.includes(event.code)){
                    if(event.code === 'ArrowDown'){
                        snake.moveDown()
                    }else if(event.code === 'ArrowLeft'){
                        snake.moveLeft()
                    }else if(event.code === 'ArrowRight'){
                        snake.moveRight()
                    }else if(event.code === 'ArrowUp'){
                        snake.moveUp()
                    }
    
                    // Cancel the default action to avoid it being handled twice
                    event.preventDefault();
                }
            }

            // change the position of food to random place
            function changeFoodLocation(){

                // generating new food coordinate
                let new_x_cord = Math.floor(Math.random() * parseFloat((width - 40))) + 40
                let new_y_cord = Math.floor(Math.random() * parseFloat((height - 40))) + 40

                // setting the new food coordinates
                food.setXCord(new_x_cord);
                food.setYCord(new_y_cord);

                
                // checking if food location matches any of snakes body location
                if(snake.hasSnakeBody()){
                    let snake_body = snake.getBody();

                    for(let i=0;i<snake_body.length;i++){
                        let {x, y} = snake_body[i].getCord();

                        if(x == new_x_cord && y == new_y_cord){
                            changeFoodLocation()
                        }
                    }
                }

                // checking if food location matches any of border position
                if(is_border_collision(new_x_cord, new_y_cord)){
                    changeFoodLocation()
                }
            }

            // draws the border onto the canvas
            function drawBorder(){
                if(borderStructure == null || !Array.isArray(borderStructure) || borderStructure.length <= 0){ return }
                
                borderStructure.forEach(a => {
                    if(!ctx){ return }
                    ctx.beginPath();
                    ctx.strokeStyle = 'white';
                    ctx.fillStyle = 'white';
                    ctx.rect(a.x_cord, a.y_cord, a.width, a.height);
                    ctx.stroke();
                    ctx.fill();
                })
            }

            // checks collision with border
            function is_border_collision({x, y}){
                if(borderStructure == null || !Array.isArray(borderStructure) || borderStructure.length <= 0){ return false }

                for(const border of borderStructure){

                    if(!ctx){ return }

                    // calculating the range of x and y coordiante of the border
                    let min_x_cord = border.x_cord;
                    let max_x_cord = border.x_cord + border.width;

                    let min_y_cord = border.y_cord;
                    let max_y_cord = border.y_cord + border.height

                    let is_collision = ((x >= min_x_cord && x <= max_x_cord) && (y >= min_y_cord && y <= max_y_cord))

                    if(is_collision){
                        return true
                    }
                }

                return false;
            }

            function restartGame(){
                if(!isGameOver){ return }

                snake = new Snake(defaultData.snakeSize, defaultData.snakeColor, defaultData.snakeXCord, defaultData.snakeYCord, defaultData.snakeSize, defaultData.snakeSize)
                food = new Food(defaultData.foodSize, defaultData.foodColor, defaultData.foodXCord, defaultData.foodYCord)
                changeFoodLocation()
                setScore(0)
                isGameOver = false;
            }

            // adding Key listener
            document.addEventListener("keydown", keyEventHandler);

            ref_canvas?.current?.addEventListener('click', restartGame)

            
            // game loop
            function animate(){
                // executes the game loop
                setTimeout(() => {
                    requestAnimationFrame(animate);
                }, (1000/FPS));
                
                // clearing canvas
                ctx.clearRect(0, 0, innerWidth, innerHeight)

                // showing game over when collision occurs
                if(isGameOver){
                    // setting the style of font
                    let font_size = 30;
                    ctx.font = `${font_size}px Arial`;

                    // aligning the text vertically and horizontally
                    ctx.textBaseline = 'middle';
                    ctx.textAlign = "center";
                    
                    ctx.fillText("Game Over", (width / 2) , (height / 2));
                }else{

                    // draws the snake onto the canvas
                    snake.draw(ctx)
                    // draws the food onto the canvas
                    food.drawAnimated(ctx)
                    // creating border structure
                    drawBorder()
    
                    // detecting food and snake collision
                    if((snake.distance(food.getCord(), true)) <= 8){
                        setScore(pre => pre + 1)
                        changeFoodLocation()
                        snake.increase()
                    }
    
                    // detecting tail collision
                    if(snake.isCollision()){
                        isGameOver = true
                    }
    
                    // detecting border collision
                    if(is_border_collision(snake.getCord())){
                        isGameOver = true
                    }
                }
            }

            // initializing game loop
            animate()

            return () => {
                // removing Key listener
                document.removeEventListener("keydown", keyEventHandler);
                document.removeEventListener("keydown", restartGame);
            }
        }
    }, []);

    

    return (
        <>
            <h1>Score: {score}</h1>
            <canvas ref={ref_canvas} width={""+width} height={""+height} />
        </>
    )
}

export default SnakeGame;