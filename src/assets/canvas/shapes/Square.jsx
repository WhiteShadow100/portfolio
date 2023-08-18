function Square(ctx, size, color, x_cord, y_cord, x_velocity=0, y_velocity=0){
    this.size = size;
    this.color = color;
    this.x_cord = x_cord;
    this.y_cord = y_cord;
    this.x_velocity = x_velocity;
    this.y_velocity = y_velocity;

    // draws the square on to the screen
    this.draw = function(){
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.rect(this.x_cord, this.y_cord, this.size, this.size);
        ctx.stroke();
        ctx.fill();
    }

    // sets the x-coordinate of the square
    this.setXCord = function(x_cord){
        this.x_cord = x_cord
    }

    // sets the y-coordinate of the square
    this.setYCord = function(y_cord){
        this.y_cord = y_cord
    }

    // returns the coordinate of the square
    this.getCord = function(){
        return {x: this.x_cord, y: this.y_cord}
    }

    // sets the x velocity of the squar
    this.setXVelocity = function(x_velocity){
        this.x_velocity = x_velocity
    }

    // sets the y velocity of the squar
    this.setYVelocity = function(y_velocity){
        this.y_velocity = y_velocity
    }

    // returns the velocity of the square
    this.getVelocity = function(){
        return {x: this.x_velocity, y: this.y_velocity}
    }
}

export default Square;