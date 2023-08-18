import Square from "../../../assets/canvas/shapes/Square";

function Snake(size, color, x_cord, y_cord, x_velocity = 0, y_velocity = 0){
    this.size = size;
    this.color = color;
    this.x_cord = x_cord;
    this.y_cord = y_cord;

    // permently holds the velocity
    this.x_velocity = x_velocity;
    this.y_velocity = y_velocity;

    // change the dirction of snakes movement
    this.temp_x_velocity = this.x_velocity;
    this.temp_y_velocity = 0;

    // holds the body of the snake
    this.body = [];

    // draws the square on to the screen
    this.draw = function(ctx){
        if(!ctx){ return }
        this.body.forEach(a => {
            let {x, y} = a.getCord();

            a.setXCord(x + this.temp_x_velocity)
            a.setYCord(y + this.temp_y_velocity)
            a.draw(ctx)
        })
    }

    // increase the size of snake on the basis of increment
    this.increase = function(increment = 1){
        for(let i=1; i<=increment; i++){
            let temp_snake_body = new Square(this.size, this.color, (this.x_cord + (i * this.size)), this.y_cord, 'black')
            this.body.push(temp_snake_body)
            // this.draw()
        }
    }

    // moves snakes moving direction to the left
    this.move_left = function(){
        this.temp_x_velocity = this.x_velocity * -1
        this.temp_y_velocity = 0
    }

    // moves snakes moving direction to the right
    this.move_right = function(){
        this.temp_x_velocity = this.x_velocity
        this.temp_y_velocity = 0
    }

    // moves snakes moving direction to the up
    this.move_up = function(){
        this.temp_x_velocity = 0
        this.temp_y_velocity = this.y_velocity * -1
    }

    // moves snakes moving direction to the down
    this.move_down = function(){
        this.temp_x_velocity = 0
        this.temp_y_velocity = this.y_velocity
    }


    this.test = function(){
        console.log(this.body)
    }
}


export default Snake;