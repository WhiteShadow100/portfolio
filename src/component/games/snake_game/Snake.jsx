import Square from "../../../assets/canvas/shapes/Square";

function Snake(size, color, x_cord, y_cord, x_velocity = 0, y_velocity = 0, border_color=null){
    this.size = size;
    this.color = color;
    this.x_cord = x_cord;
    this.y_cord = y_cord;
    this.border_color = border_color || color

    // permently holds the velocity
    this.x_velocity = x_velocity;
    this.y_velocity = y_velocity;

    // change the dirction of snakes movement
    this.temp_x_velocity = this.x_velocity;
    this.temp_y_velocity = 0;

    // holds the body of the snake
    this.body = [];

    // represnts the current direction in which is moving
    this.current_direction = 'right'

    // changes the position of snake head
    this.moveHead = function(ctx){
        if(this.body == null || !Array.isArray(this.body) || this.body.length <= 0){ return }

        let snake_head = this.body[0];
        let {x, y} = snake_head.getCord();

        snake_head.setXCord(x + this.temp_x_velocity)
        snake_head.setYCord(y + this.temp_y_velocity)
        snake_head.draw(ctx)
    }

    // increase the size of snake on the basis of increment
    this.increase = function(increment = 1){


        // initial value of loop counter (i.e => 'i')
        let loop_initializer = 0
        
        // if null or not an array convert to array
        if(this.body == null || !Array.isArray(this.body)){
            this.body = []
        }
        
        // if no body has been created
        if(this.body.length <= 0){ 
            let temp_snake_body = new Square(this.size, this.color, this.x_cord, this.y_cord, 'black')
            this.body.push(temp_snake_body)
            loop_initializer += 1
        }

        for(let i=loop_initializer; i<increment; i++){
            // getting the coordinate of last square
            let last_element_index = this.body.length - 1;
            let {x, y} = this.body[last_element_index].getCord();
            let temp_snake_body = new Square(this.size, this.color, x + this.x_velocity,  y + this.y_velocity, 'black')
            this.body.push(temp_snake_body)
        }

    }

    // draws the square on to the screen
    this.draw = function(ctx){
        if(!ctx){ return }

        if(this.body == null || !Array.isArray(this.body) || this.body.length <= 0){ return }

        // this is dont to prevent over lapping of snake body
        if(this.body.length <= 1){
            this.moveHead(ctx)
        }

        for(let i=(this.body.length - 1);i>0;i--){

            let temp_body = this.body[i];
            let temp_presiding_body = this.body[i-1]

            if(!temp_body || !temp_presiding_body){ return }

            let {x, y} = temp_presiding_body.getCord();

            temp_body.setXCord(x)
            temp_body.setYCord(y)
            temp_body.draw(ctx)
        }

        this.moveHead(ctx)
    }

    // moves snakes moving direction to the left
    this.moveLeft = function(){
        if(this.current_direction === 'right'){ return }
        this.temp_x_velocity = this.x_velocity * -1
        this.temp_y_velocity = 0
        this.current_direction = 'left'
    }

    // moves snakes moving direction to the right
    this.moveRight = function(){
        if(this.current_direction === 'left'){ return }
        this.temp_x_velocity = this.x_velocity
        this.temp_y_velocity = 0
        this.current_direction = 'right'
    }

    // moves snakes moving direction to the up
    this.moveUp = function(){
        if(this.current_direction === 'down'){ return }
        this.temp_x_velocity = 0
        this.temp_y_velocity = this.y_velocity * -1
        this.current_direction = 'up'
    }

    // moves snakes moving direction to the down
    this.moveDown = function(){
        if(this.current_direction === 'up'){ return }
        this.temp_x_velocity = 0
        this.temp_y_velocity = this.y_velocity
        this.current_direction = 'down'
    }

    // returns the distance between this object and other object
    // if is_integer is true then converts the distance into integer
    this.distance = function({x, y}, is_integer=false){
        if(this.body == null || !Array.isArray(this.body) || this.body.length <= 0){ return 0 }

        // getting coordinate of head i.e first element in body
        let head = this.body[0];
        let head_cord = head.getCord();

        let distance = Math.abs(Math.sqrt(Math.pow((x - head_cord.x), 2) + Math.pow((y - head_cord.y), 2)));

        if(is_integer){
            distance = Math.floor(distance);
        }
        return distance;
    }

    // returns snakes body
    this.getBody = function(){
        return this.body;
    }

    // returns true if there is data in snake body
    this.hasSnakeBody = function(){
        return !(this.body == null || !Array.isArray(this.body) || this.body.length <= 0)
    }

    // returns the coordinate of snakes head
    this.getCord = function(){
        if(this.hasSnakeBody){
            // getting coordinate of snake head
            let snake_head = this.body[0];
            return snake_head.getCord();
        }else{
            return {x: -1, y: -1}
        }
    }

    // checks if there is collision with tail
    this.isCollision = function(){
        if(!this.hasSnakeBody()){ return false }

        let snake_head = this.body[0];

        for(let i=1;i<this.body.length;i++){
            if(snake_head.distance(this.body[i].getCord()) < size){
                return true;
            }
        }

        return false;
    }

    // initializing a snake of length 3
    this.increase(3)

}


export default Snake;